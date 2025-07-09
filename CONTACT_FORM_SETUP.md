# Contact Form Setup Instructions

## Overview
The contact form now has dual integration:
1. **Primary**: Google Sheets + Email notifications
2. **Fallback**: Netlify Forms

## Google Apps Script Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Graviky Contact Form Submissions"
3. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Title`
   - E1: `Organization`
   - F1: `Interest`
   - G1: `Message`

### Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    const formData = e.parameter;
    const timestamp = new Date().toISOString();
    
    // Add row to sheet
    sheet.appendRow([
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.title || '',
      formData.organization || '',
      formData.interest || '',
      formData.message || ''
    ]);
    
    // Send email notification
    sendEmailNotification(formData, timestamp);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(formData, timestamp) {
  const subject = `New Contact Form Submission - ${formData.interest || 'General'}`;
  
  const body = `
New contact form submission received:

📧 Contact Details:
• Name: ${formData.name || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Title: ${formData.title || 'Not provided'}
• Organization: ${formData.organization || 'Not provided'}

🎯 Interest: ${formData.interest || 'Not specified'}

💬 Message:
${formData.message || 'No message provided'}

⏰ Submitted: ${timestamp}

---
This email was automatically generated from the Graviky website contact form.
`;
  
  // Send email to the team
  GmailApp.sendEmail(
    'talk@graviky.com',
    subject,
    body,
    {
      name: 'Graviky Website',
      replyTo: formData.email || 'no-reply@graviky.com'
    }
  );
}

// Test function to verify email sending
function testEmail() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    title: 'Test Manager',
    organization: 'Test Company',
    interest: 'Packaging',
    message: 'This is a test message'
  };
  
  sendEmailNotification(testData, new Date().toISOString());
}
```

### Step 3: Configure and Deploy
1. Click the "Extensions" menu → "Apps Script"
2. Paste the script above
3. Click "Deploy" → "New deployment"
4. Choose type: "Web app"
5. Set "Execute as": "Me"
6. Set "Who has access": "Anyone"
7. Click "Deploy"
8. Copy the web app URL

### Step 4: Update the Website
1. In the file `src/Components/Home/Section9/Section9.js`
2. Replace the placeholder URL in line 45:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_ACTUAL_GOOGLE_SCRIPT_URL_HERE";
   ```

### Step 5: Set up Gmail Permissions
1. Run the script once manually to authorize Gmail access
2. Go to "Run" → "testEmail" in the Apps Script editor
3. Grant the necessary permissions

## Netlify Forms Setup (Fallback)

### Step 1: Enable Netlify Forms
1. Go to your Netlify dashboard
2. Navigate to your site settings
3. Go to "Forms" section
4. Forms should be automatically detected from the hidden form in your HTML

### Step 2: Configure Email Notifications
1. In Netlify Forms settings, go to "Form notifications"
2. Add email notification to `talk@graviky.com`
3. Customize the email template if needed

## Testing

### Test Google Sheets Integration
1. Submit a test form on your website
2. Check if the data appears in your Google Sheet
3. Verify that email notification is sent to talk@graviky.com

### Test Netlify Forms Fallback
1. Temporarily break the Google Script URL to test fallback
2. Submit a form and check Netlify dashboard for submissions
3. Verify email notifications work

## Troubleshooting

### Common Issues
1. **Google Script permissions**: Make sure to authorize Gmail access
2. **CORS issues**: The script uses `mode: 'no-cors'` to handle this
3. **Email delivery**: Check spam folders, ensure Gmail API is enabled

### Monitoring
- Check Google Apps Script logs for errors
- Monitor Netlify Forms dashboard for submissions
- Test the form regularly to ensure both systems work

## Security Notes
- The Google Script URL is public but only accepts POST requests
- Form data is validated before processing
- Email notifications include sender's email for easy replies
- Both systems have rate limiting built-in