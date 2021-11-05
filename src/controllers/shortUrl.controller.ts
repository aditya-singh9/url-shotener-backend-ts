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

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.redirect(short.destination);
}
