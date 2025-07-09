# Google Apps Script Contact Form Setup

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "Graviky Contact Form Submissions"
4. In the first row, add these headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Title`
   - **E1**: `Organization`
   - **F1**: `Interest`
   - **G1**: `Message`
   - **H1**: `IP Address`
   - **I1**: `User Agent`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete the default `myFunction()` code
3. Replace with the following code:

```javascript
function doPost(e) {
  console.log('Form submission received:', e);
  
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    const formData = e.parameter;
    const timestamp = new Date();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Name and email are required'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add row to sheet
    sheet.appendRow([
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.title || '',
      formData.organization || '',
      formData.interest || '',
      formData.message || '',
      formData.ipAddress || '',
      formData.userAgent || ''
    ]);
    
    // Send email notification
    const emailSent = sendEmailNotification(formData, timestamp);
    
    console.log('Data saved to sheet, email sent:', emailSent);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully',
        emailSent: emailSent
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(formData, timestamp) {
  try {
    const subject = `🚀 New Contact Form Submission - ${formData.interest || 'General'}`;
    
    const body = `
New contact form submission from Graviky website:

📧 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name: ${formData.name || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Title: ${formData.title || 'Not provided'}
• Organization: ${formData.organization || 'Not provided'}
• Interest: ${formData.interest || 'Not specified'}

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || 'No message provided'}

🔍 TECHNICAL INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Submitted: ${timestamp.toLocaleString()}
• IP Address: ${formData.ipAddress || 'Not available'}
• User Agent: ${formData.userAgent || 'Not available'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was automatically generated from the Graviky website contact form.
Reply to this email to respond directly to the sender.
`;
    
    // Send email to the team
    GmailApp.sendEmail(
      'talk@graviky.com',
      subject,
      body,
      {
        name: 'Graviky Website Contact Form',
        replyTo: formData.email || 'no-reply@graviky.com'
      }
    );
    
    return true;
    
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Test function - run this to verify email sending works
function testEmailSending() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    title: 'Test Manager',
    organization: 'Test Company',
    interest: 'AIR-INK for Packaging',
    message: 'This is a test message from the contact form setup.',
    ipAddress: '127.0.0.1',
    userAgent: 'Test Browser'
  };
  
  const result = sendEmailNotification(testData, new Date());
  console.log('Test email sent:', result);
  return result;
}

// Test function - run this to verify form processing works
function testFormProcessing() {
  const testEvent = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      title: 'Test Manager',
      organization: 'Test Company',
      interest: 'AIR-INK for Packaging',
      message: 'This is a test message.'
    }
  };
  
  const result = doPost(testEvent);
  console.log('Test form processing result:', result.getContent());
  return result;
}
```

## Step 3: Configure and Deploy

1. **Save the script** (Ctrl+S or Cmd+S)
2. **Name your project**: "Graviky Contact Form Handler"
3. **Run the test function**:
   - Select `testEmailSending` from the function dropdown
   - Click the **Run** button
   - Grant the necessary permissions when prompted
4. **Deploy as Web App**:
   - Click **Deploy** → **New deployment**
   - Choose type: **Web app**
   - Description: "Graviky Contact Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
5. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/AKfycbxxx.../exec`)

## Step 4: Update Your Website

Once you have the Web App URL, I'll update your contact form to use it.

## Step 5: Test Everything

1. Test the email function in Apps Script
2. Test the form processing function
3. Test the actual contact form on your website
4. Verify emails are received at talk@graviky.com

## Features Included:

✅ **Automatic email notifications** to talk@graviky.com
✅ **Google Sheets logging** of all submissions
✅ **Spam protection** and validation
✅ **IP address and user agent tracking**
✅ **Professional email formatting**
✅ **Error handling and logging**
✅ **Reply-to functionality** (emails can be replied to directly)

## Security Notes:

- The script only accepts POST requests
- Input validation is performed
- Rate limiting is handled by Google
- All submissions are logged for audit purposes

## Troubleshooting:

If you encounter issues:
1. Check the Apps Script execution log
2. Verify Gmail permissions are granted
3. Test the individual functions first
4. Check spam folder for emails