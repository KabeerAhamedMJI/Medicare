import twilio from 'twilio';
import nodemailer from 'nodemailer';

const accountSid = process.env.TWILO_SID;
const authToken = process.env.TWILO_TOKEN;
const client = new twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_EMAIL_USER,
        pass: process.env.NODE_EMAIL_PASS
    }
});

export const sendOtp = async (contact, otp) => {
    const phoneNumberPattern = /^\+\d{1,15}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneNumberPattern.test(contact)) {
        try {
            const message = await client.messages.create({
                body: `Greetings from Medicare..! Your OTP is ${otp}`,
                from: '+15168064631',
                to: contact
            });
            return message.sid;
        } catch (error) {
            res.status(error.status || 400).json({ message: error.message || 'Failed to send OTP via SMS' });
        }
    } else if (emailPattern.test(contact)) {
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: contact,
                subject: 'Your OTP Code',
                text: `Greetings from Medicare..! Your OTP is ${otp}`
            });
            return 'Email sent successfully';
        } catch (error) {
            res.status(error.status || 400).json({ message: error.message || 'Failed to send OTP via email' });
        }
    } else {
        res.status(error.status || 400).json({ message: error.message || 'Invalid contact format' });
    }
};
