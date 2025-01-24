import {Model } from "sequelize";
class crudRepository {
    constructor(model){
        this.model = model
    }    
    async create(data){
        try {
            console.log(this.model)
            const response  = await this.model.create(data);
            return response; 
        } catch (error) {
             // Logger.error('Something went wrong in the CRUD repo : create function');
            console.log(error.message);
             throw error;
        }
    }

    async delete(data){
        try {
            const response  = await this.model.delete({
                where : {
                    id : data
                }
            });
            return response; 
        } catch (error) {
            // Logger.error('Something went wrong in the CRUD repo : create function');
            console.log(error.message);
            throw error;
        }
    }
    async get(data){
        try {
            const response  = await this.model.findbyPk(data); // this will search the data using the primary key
            return response; 
        } catch (error) {
            // Logger.error('Something went wrong in the CRUD repo : create function');
            console.log(error.message);
            throw error;
        }
    }
    async getAll(data){
        try {
            const response  = await this.model.findAll(); // this will search the data using the primary key
            return response; 
        } catch (error) {
            console.log(error.message);
            // Logger.error('Something went wrong in the CRUD repo : create function');
            throw error;
        }
    }   
    async update(id , data){
        try {
            const response  = await this.model.update(data , {
                where : {
                    id : id
                }
            }); // only the specific data will be updated
            return response; 
        } catch (error) {
            console.log(error.message);
            // Logger.error('Something went wrong in the CRUD repo : create function');
            throw error;
        }
    }
}
export default crudRepository