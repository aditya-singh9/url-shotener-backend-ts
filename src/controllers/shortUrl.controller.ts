import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";
import shortUrlSchema from "../validators/shortUrl.schema";

export async function createShortUrl(req: Request, res: Response) {
  // Get the destination from the request body
  const { destination, shortId } = req.body;
  const result = await shortUrlSchema.validateAsync(req.body);
  console.log(result);

  // Create a shorturl
  const newUrl = await shortUrl.create({ destination, shortId });

  // Return the shortUrl
  return res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: short._id });

  return res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getShortUrl(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.json(short);
}
