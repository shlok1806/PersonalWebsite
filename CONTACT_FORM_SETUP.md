# Contact Form Setup Guide

Your contact form is now fully functional with a Vercel serverless API! Here's how to set it up with email notifications.

## Current Status ✅

- ✅ Contact form with validation
- ✅ Vercel API route (`/api/contact.ts`)
- ✅ Loading states and user feedback
- ✅ Toast notifications
- ✅ Resend email integration
- ✅ Beautiful HTML email template
- ✅ Form data logging (viewable in Vercel dashboard)

## Email Integration Setup

### ✅ Resend Integration (Already Configured)

Your contact form is now fully integrated with Resend! Here's what's been set up:

1. **✅ Resend Package Installed**: `npm install resend`
2. **✅ API Route Updated**: `/api/contact.ts` now sends emails
3. **✅ Beautiful Email Template**: Professional HTML email design
4. **✅ Environment Variable**: Ready for your API key

### 🔧 Setup Steps (Required)

1. **Add Environment Variable in Vercel**:
   - Go to your [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add: `RESEND_API_KEY` = your_resend_api_key_here
   - Select all environments (Production, Preview, Development)

2. **For Local Development**:
   - Create a `.env.local` file in your project root
   - Add: `RESEND_API_KEY=your_resend_api_key_here`

3. **Redeploy Your Project**:
   - After adding the environment variable, Vercel will automatically redeploy
   - Or trigger a manual redeploy from the dashboard

### 📧 Email Configuration

**Current Settings:**
- **From**: `onboarding@resend.dev` (Resend's default sender)
- **To**: `shlokthakkar1806@gmail.com` (your email)
- **Subject**: `New Contact Form Submission: [user's subject]`

**To Customize:**
- **Change "From" email**: Verify your domain in Resend and update the `from` field
- **Change "To" email**: Update the `to` field in `/api/contact.ts`
- **Customize email template**: Modify the HTML template in the API file

### Option 2: SendGrid

1. **Sign up for SendGrid**: https://sendgrid.com
2. **Get your API key**
3. **Install the package**:
   ```bash
   npm install @sendgrid/mail
   ```
4. **Add environment variable**: `SENDGRID_API_KEY`
5. **Update the API file** with SendGrid code

### Option 3: Nodemailer (SMTP)

1. **Install nodemailer**:
   ```bash
   npm install nodemailer
   ```
2. **Configure your SMTP settings** in environment variables
3. **Update the API file** with nodemailer code

## Testing

1. **Local testing**: Run `npm run dev` and test the form
2. **Production testing**: Deploy to Vercel and test on your live site
3. **Check logs**: View form submissions in your Vercel dashboard

## Security Features

- ✅ Input validation
- ✅ Email format validation
- ✅ CORS protection (Vercel handles this)
- ✅ Rate limiting (can be added if needed)

## Customization

You can customize:
- Email template styling
- Notification messages
- Form validation rules
- Success/error handling

## Support

If you need help setting up email integration, check the documentation for your chosen email service or reach out for assistance! 