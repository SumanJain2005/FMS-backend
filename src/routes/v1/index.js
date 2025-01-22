import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import info from "../../controllers/info-controller.js";
const router = Router();
router.get("/info", info);
router.get("/", (req, res) => {
    return res.json({ message: "hello" }).status(StatusCodes.OK);
})
export default router;