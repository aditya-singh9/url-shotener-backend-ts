import { Express, Response, Request } from "express";
import {
  createShortUrl,
  handleRedirect,
} from "../controllers/shortUrl.controller";
import validateResource from "../middleware/validateResource";
import CreateShortUrlSchema from "../schema/CreateShortUrl.schema";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => {
    return res.send("Working fine");
  });

  app.post("/api/url", validateResource(CreateShortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);
}

export default routes;
