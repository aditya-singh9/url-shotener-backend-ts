import { Express, Response, Request } from "express";
import { createShortUrl } from "../controllers/shortUrl.controller";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => {
    return res.send("Working fine");
  });

  app.post("/api/url", createShortUrl);
}

export default routes;
