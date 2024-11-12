// src/pages/api/contactus/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, mobile, service, subject, message } = req.body;

    // Basic form validation
    if (!name || !email || !mobile || !service || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Create a transporter object using Gmail (or another email provider)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail address
          pass: process.env.EMAIL_PASS, // Your Gmail App Password (see below)
        },
        tls: {
          rejectUnauthorized: false, // Disables SSL certificate validation
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email address
        to: process.env.RECIPIENT_EMAIL, // Recipient email address (where you want to receive the form submissions)
        subject: `New Contact Us Form Submission: ${subject}`,
        text: `
          You have a new form submission!

          Name: ${name}
          Email: ${email}
          Mobile: ${mobile}
          Service: ${service}
          Subject: ${subject}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Method Not Allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
