import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  try {
    const { name, email, subject, message } = params;
    
    // Email to site owner (Ayush)
    const emailToOwner = {
      to: 'ayushdixit244@gmail.com',
      from: 'ayushdixit244@gmail.com', // Using your verified email as sender
      replyTo: email, // So you can reply directly to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #64FFDA; border-bottom: 2px solid #64FFDA; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #64FFDA; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from your portfolio contact form.
        Reply directly to respond to ${name}.
      `
    };

    // Confirmation email to sender
    const confirmationEmail = {
      to: email,
      from: 'ayushdixit244@gmail.com',
      subject: 'Thank you for contacting Ayush Dixit',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #64FFDA; border-bottom: 2px solid #64FFDA; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your message summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          
          <p>Best regards,<br><strong>Ayush Dixit</strong><br>Software Engineer</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      text: `
        Hi ${name},
        
        Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.
        
        Your message summary:
        Subject: ${subject}
        Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}
        
        Best regards,
        Ayush Dixit
        Software Engineer
        
        ---
        This is an automated confirmation email. Please do not reply to this email.
      `
    };

    // Send email to site owner (primary goal)
    await mailService.send(emailToOwner);
    
    // Try to send confirmation email (optional, don't fail if this doesn't work)
    try {
      await mailService.send(confirmationEmail);
    } catch (confirmationError) {
      console.log('Confirmation email failed, but main email sent successfully');
    }

    console.log('Contact emails sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    if (error.response && error.response.body) {
      console.error('SendGrid error details:', JSON.stringify(error.response.body, null, 2));
    }
    return false;
  }
}