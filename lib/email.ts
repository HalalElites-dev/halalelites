"use server";

import z from "zod";
import { formSchema } from "./schemas";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export const sendEmail = async (data: z.infer<typeof formSchema>) => {
    try {
        const { name, email, phone, message } = data;

        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: 'habeeb.s@halalelites.dev',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #666; font-size: 14px;">
                        This email was sent from your website contact form.
                    </p>
                </div>
            `,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: "Failed to send email. Please try again." };
    }
}; 