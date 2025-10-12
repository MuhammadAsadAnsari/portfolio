# EmailJS Setup Guide

## Overview
Your contact form now uses EmailJS to send emails directly from the browser without needing a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Configure your template with these variables:
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body
   - `{{to_name}}` - Your name (Asad)
   - `{{reply_to}}` - Reply-to address

Example template:
```
Subject: Portfolio Contact: {{subject}}

From: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and copy your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (formerly called User ID)
3. Copy it

### 5. Update Your Code
In `components/Availability.tsx`, replace these values around line 38-40:
```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### 6. Template Variable Mapping
The form sends these variables to EmailJS:
- `from_email` → User's email address
- `subject` → Subject line from the form
- `message` → Message body from the form
- `to_name` → "Asad" (hardcoded)
- `reply_to` → User's email (for easy replies)

Make sure your EmailJS template uses these exact variable names.

### 7. Test Your Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message
5. Verify the success message appears on the form

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio contact forms
- Upgrade if you need more

## Troubleshooting

### Email not sending?
- Check browser console for error messages
- Verify all IDs are correct
- Check EmailJS dashboard for failed email logs
- Ensure email service is properly connected

### Template not working?
- Variable names must match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`
- Test template in EmailJS dashboard first

### Rate limiting?
- Free tier: 200 emails/month
- Add captcha to prevent spam submissions
- Consider upgrading plan if needed

## Security Note
The EmailJS public key is safe to expose in client-side code. However, consider adding:
- Rate limiting
- reCAPTCHA
- Email validation

to prevent spam submissions.

## Support
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

