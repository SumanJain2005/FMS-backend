import express from "express";
import { StatusCodes } from "http-status-codes";
const code = StatusCodes;
const router = express.Router();
router.get("/info", (req, res) => {
    return res.json({ message: "hello , this is from v2 API" }).status(code.OK);
})
export default router;
