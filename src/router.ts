import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("<h1>Please add info, this is the backend</h1>");
});

export default router;