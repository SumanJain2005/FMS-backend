import crudRepository from "./crud-repository.js";
import db from "../models/index.js"; // Import the db object
const { Flight } = db; // Destructure the Flight model

class airplaneRepository extends crudRepository {
    constructor() {
        super(Flight); // Pass the correct model
    }
}

export default airplaneRepository;