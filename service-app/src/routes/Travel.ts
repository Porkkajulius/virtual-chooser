import express, { Request, Response } from "express";
import { travelController } from "../controllers";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  travelController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
  travelController.read(req, res);
});

router.patch("/", (req: Request, res: Response) => {
  travelController.update(req, res);
});

router.delete("/", (req: Request, res: Response) => {
  travelController.delete(req, res);
});
