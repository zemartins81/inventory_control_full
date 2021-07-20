import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const { resolve, join } = path;

dotenv.config({
  path: join(resolve(), './src/config/', '.env'),
});

const transport = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

transport.use(
  'compile',
  hbs({
    viewEngine: {
      extname: '.html',
      layoutsDir: 'views/email/',
      defaultLayout: '',
      partialsDir: 'views/partials/',
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  })
);

export default transport;
