import { Request, Response } from "express";

const users = [{ name: "Luiz", email: "luiz@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
