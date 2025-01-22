import pkg from "winston";
const {createLogger , format , transports} = pkg;
const {combine , timestamp , printf , label} = format;
const customFormat = printf(({ level , message , label , timestamp }) => {
    return `${timestamp} :  ${level}: ${message}`;
})
const logger = createLogger({
    format : combine(label({ label: "custom-label" }) , timestamp({format: "YYYY-MM-DD HH:mm:ss"}) , customFormat),
    transports : 
    [
        new transports.Console(),
        new transports.File({filename : "combined.log"}) // means now the log will not only come on the console, but they will also come on the file named combined.log
    ]
})
// level is equivalent to different types of logs, timestamp will show when the error happens, 

export default logger;