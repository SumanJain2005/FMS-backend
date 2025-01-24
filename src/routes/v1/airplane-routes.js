import express from "express";
import airplaneController from "../../controllers/airplane-controller.js";
const router = express.Router();

router.post("/" , airplaneController.CreateAirplane);
export default router