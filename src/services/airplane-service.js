import airplaneRepository from "../repositories/airplane-crud-repo.js";
const obj = new airplaneRepository();
function createAirplane(data){
    try {
        const airplane = obj.create(data);
        return airplane
    } catch (error) {
        throw error
    }
}
export default {
   createAirplane
}