import airplaneService from "../services/airplane-service.js";
import { StatusCodes } from "http-status-codes";
async function CreateAirplane(req , res){
    try {
        const ariplane = await airplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : "airplane created successfully",
            data : ariplane,
            error : {}
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "something went wrong while creating airplane",
            data : {},
            error : error.message
        })
    }
}
export default {
   CreateAirplane
}