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

interface ISendMailDTO {
  to: IMailTo;
  message: IMailMessage;
}

/**
 * DTO
 * Data Transfer Object()
 */

class EmailService {
  sendMail({ to, message }: ISendMailDTO) {
    console.log(`Email sent to ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
