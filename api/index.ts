import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.get("/home", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Home World!");
});

export default app;
