import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
  //Get the destination from the body
  const { destination } = req.body;

  //Create a short URL
  const newURL = await shortUrl.create({ destination });

  //Return short URL
  return res.send(newURL);
}
