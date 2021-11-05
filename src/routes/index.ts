import { Express, Response, Request } from "express";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => {
    return res.send("Working fine");
  });
}

export default routes;
