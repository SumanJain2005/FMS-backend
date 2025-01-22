import { StatusCodes } from "http-status-codes";

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({ 
        success: true,
        message: "hello",
        data: {},
        error: {} 
    }).status(200);
}

export default info;