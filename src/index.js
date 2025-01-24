import config from "./config/index.js";
import express from "express";
import apiRoutes from "./routes/index.js";
const app = express();
const Logger = config.Logger;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api', apiRoutes);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
    Logger.info(`Server is running on port ${config.PORT}` , {});
});