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
    const firstEmailResponse = await resendClient.emails.send({
      from: 'sophie <bekonorosy0@gmail.com>',
      to: 'bekonorosy0@gmail.com',
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${messageText}`
    });
    console.log('First email sent response:', firstEmailResponse);

    const confirmationEmailResponse = await resendClient.emails.send({
      from: 'sophie <bekonorosy0@gmail.com>',
      to: email,
      subject: 'Confirmation: Your message was received',
      text: `Hello ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nBekono Sophie.`
    });
    console.log('Confirmation email sent response:', confirmationEmailResponse);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
