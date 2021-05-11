const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const username = process.env.GMAIL_USERNAME;
const password = process.env.GMAIL_PASSWORD;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: username,
    pass: password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: 'heyitspaolo@gmail.com',
    subject: 'Contact Form Submission',
    html: `<h1>${name}</h1>
           <h2>${email}</h2>
           <h3>${subject}</h3>
           <p>${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});
