import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const resendClient = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/send-email', async (req, res) => {
  const { name, email, messageText } = req.body;
  console.log('Received request to send email:', { name, email, messageText });

  try {
    const { data: firstEmailData, error: firstEmailError } = await resendClient.emails.send({
      from: 'sophie <bekonorosy0@gmail.com>',
      to: ['bekonorosy0@gmail.com'],
      subject: 'New Contact Form Message',
      html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong> ${messageText}`,
    });

    if (firstEmailError) {
      console.error('Error sending first email:', firstEmailError);
      return res.status(500).json({ success: false, error: firstEmailError.message });
    }

    console.log('First email sent data:', firstEmailData);

    const { data: confirmationEmailData, error: confirmationEmailError } = await resendClient.emails.send({
      from: 'sophie <bekonorosy0@gmail.com>',
      to: [email],
      subject: 'Confirmation: Your message was received',
      html: `<p>Hello ${name},</p><p>Thank you for reaching out! We have received your message and will get back to you soon.</p><p>Best regards,<br/>Bekono Sophie.</p>`,
    });

    if (confirmationEmailError) {
      console.error('Error sending confirmation email:', confirmationEmailError);
      return res.status(500).json({ success: false, error: confirmationEmailError.message });
    }

    console.log('Confirmation email sent data:', confirmationEmailData);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error in send-email handler:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
