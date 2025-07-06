import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    await resend.emails.send({
      from: 'Shlok Thakkar <onboarding@resend.dev>', // Better sender name
      to: 'shlokthakkar1806@gmail.com', // Your email address
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email, // Allow replying directly to the sender
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #3b82f6; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #1f2937;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #1f2937;">${email}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #1f2937;">${subject}</span></p>
            </div>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent from your personal website contact form.
              </p>
            </div>
          </div>
        </div>
      `
    });

    // Log the submission for debugging
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
} 