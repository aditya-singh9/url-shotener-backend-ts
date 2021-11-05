import { Express, Response, Request } from "express";
import {
  createShortUrl,
  handleRedirect,
} from "../controllers/shortUrl.controller";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => {
    return res.send("Working fine");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:shortId", handleRedirect);
}

export default routes;
