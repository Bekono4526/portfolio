import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mailjet from 'node-mailjet';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

const mailjetClient = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/send-email', (req, res) => {
  const { name, email, messageText } = req.body;

  const request = mailjetClient
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'bekonorosy0@gmail.com', // Votre adresse email
            Name: 'sophie', // Votre nom ou celui de l'organisation
          },
          To: [
            {
              Email: 'bekonorosy0@gmail.com', // Remplacer par votre adresse email
              Name: 'sophie', // Remplacer par votre nom ou celui de l'organisation
            },
          ],
          Subject: 'New Contact Form Message',
          TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${messageText}`,
        },
        {
          From: {
            Email: 'bekonorosy0@gmail.com', // Votre adresse email
            Name: 'sophie', // Votre nom ou celui de l'organisation
          },
          To: [
            {
              Email: email, // L'adresse email de l'utilisateur
              Name: name, // Le nom de l'utilisateur
            },
          ],
          Subject: 'Confirmation: Your message was received',
          TextPart: `Hello ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nYour Name/Organization`,
        }
      ],
    });

  request
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
