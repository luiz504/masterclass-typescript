import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Luiz", email: "luiz@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: "Luiz",
        email: "luiz@email.com",
      },
      message: {
        subject: "Welcome to the Platform",
        body: "welcome!",
      },
    });

    return res.send();
  },
};
