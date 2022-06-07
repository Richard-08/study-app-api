import express from "express";

export default function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(400).json({ message: "Access denied" });
}
