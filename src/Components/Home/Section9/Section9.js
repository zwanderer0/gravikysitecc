import React, { Component } from "react";
import { withAlert } from "react-alert";
import "./Section9.css";

class Section9 extends Component {
  state = {
    isLoading: 0,
    name: "",
    email: "",
    message: "",
    interest: "",
    title: "",
    organization: ""
  };

  getName = e => {
    this.setState({ name: e.target.value });
  };

  getTitle = e => {
    this.setState({ title: e.target.value });
  };

  getOrganization = e => {
    this.setState({ organization: e.target.value });
  };

  getInterest = e => {
    this.setState({ interest: e.target.value });
  };

  getEmail = e => {
    this.setState({ email: e.target.value });
  };

  getMessage = e => {
    this.setState({ message: e.target.value });
  };

  sendMessage = (e, alert) => {
    e.preventDefault();
    
    // Google Apps Script Web App URL - You'll need to replace this with your actual URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBQtLxj7YzuOKEJrTUjZBkQFOVOOyWAoOvjLjYZHdJyLnTg-dXXXXXXXXXXXXXXXXXXXXXXX/exec";
    
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('title', this.state.title);
    formData.append('organization', this.state.organization);
    formData.append('message', this.state.message);
    formData.append('interest', this.state.interest);
    formData.append('timestamp', new Date().toISOString());
    
    if (this.state.name !== "" && this.state.email !== "") {
      this.setState({ isLoading: 1 });
      
      // Try Google Sheets first
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .then(() => {
        alert.success("Thanks, We will get back to you! ;)");
        this.setState({ 
          isLoading: 0, 
          name: "", 
          email: "", 
          message: "", 
          title: "", 
          organization: "", 
          interest: "" 
        });
      })
      .catch(error => {
        console.log('Google Sheets error:', error);
        // Fallback to Netlify Forms
        this.submitToNetlifyForms(alert);
      });
    } else {
      alert.show("Name and Email should not be empty");
    }
  };

  submitToNetlifyForms = (alert) => {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('title', this.state.title);
    formData.append('organization', this.state.organization);
    formData.append('message', this.state.message);
    formData.append('interest', this.state.interest);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      alert.success("Thanks, We will get back to you! ;)");
      this.setState({ 
        isLoading: 0, 
        name: "", 
        email: "", 
        message: "", 
        title: "", 
        organization: "", 
        interest: "" 
      });
    })
    .catch(error => {
      this.setState({ isLoading: 0 });
      console.log('Netlify Forms error:', error);
      alert.error("Unable to process your request now. Reach out to us directly at talk@graviky.com");
    });
  };
  render() {
    const alert = this.props.alert;
    return (
      <div id = "contact-form" className="section9-container">
        <div
          className={this.state.isLoading === 1 ? "loading-block" : "invisible"}
        ></div>
        <h1>Contact Us</h1>
        <p>Begin your carbon negative journey</p>
        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="title" />
          <input type="text" name="organization" />
          <select name="interest">
            <option value="Packaging">AIR-INK for Packaging</option>
            <option value="Apparel">AIR-INK for Apparel</option>
            <option value="Writing Instruments">AIR-INK for Writing</option>
            <option value="RnD">R&D and New Applications</option>
            <option value="Press/General">General/Press</option>
          </select>
          <textarea name="message"></textarea>
        </form>

        <form
          onSubmit={e => this.sendMessage(e, alert)}
          className="message-send-form"
          name="contact"
        >
          <select
            className={`form-input minimal`}
            value={this.state.interest}
            onChange={this.getInterest}
            required
          >
            <option id="disabled" value="" hidden disabled>
              Choose interest
            </option>
            <option value="Packaging">AIR-INK for Packaging</option>
            <option value="Apparel">AIR-INK for Apparel</option>
            <option value="Writing Instruments">AIR-INK for Writing</option>
            <option value="RnD">R&D and New Applications</option>
            <option value="Press/General">General/Press</option>
          </select>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={this.state.name}
            onChange={this.getName}
          />
          <input
            className="form-input"
            type="text"
            id="title"
            name="title"
            placeholder="Your title"
            required
            value={this.state.title}
            onChange={this.getTitle}
          />
          <input
            className="form-input"
            type="text"
            id="organization"
            name="organization"
            placeholder="Your organization"
            required
            value={this.state.organization}
            onChange={this.getOrganization}
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            onChange={this.getEmail}
            value={this.state.email}
          />
          <textarea
            className="form-input"
            placeholder="Your message"
            rows="6"
            id="message"
            name="message"
            onChange={this.getMessage}
            value={this.state.message}
          />
          <input
            className="submit-button"
            type="submit"
            id="fname"
            name="fname"
            value="Send My Message"
          />
        </form>
      </div>
    );
  }
}

export default withAlert()(Section9);
