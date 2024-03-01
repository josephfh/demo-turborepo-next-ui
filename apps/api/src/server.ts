import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { designTokens } from "./data/design-tokens";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/design-tokens", (_, res) => {
      return res.json(designTokens);
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
