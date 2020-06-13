interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>; // most of the cases can use string[]
  //?: defines a field no required
}

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email sent to ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
