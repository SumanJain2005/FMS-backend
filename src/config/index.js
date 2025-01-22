import dotenv from "dotenv";
import Logger from "./login-config.js";
dotenv.config();

export default {
    PORT: process.env.PORT ,
    Logger: Logger
};    