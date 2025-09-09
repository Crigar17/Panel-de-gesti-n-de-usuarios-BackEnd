const winston = require('winston')
require('winston-mongodb')
const path = require('path')

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({level, message, timestamp}) => {
            return `[${timestamp}] ${level}: ${message} `
        })
    ),

    transports: [
        new winston.transports.Console({
            formar: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.printf(({level, message, timestamp}) => {
                    return `[${timestamp}] ${level}: ${message}`
            })
            ),
        }),

        new winston.transports.MongoDB({
            level: "error",
            db: process.env.DB_URI,
            collection: "error",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        }),

        new winston.transports.File({
            filename: path.join(__dirname, "logs", "error", "error.log"),
            level: "error"
        }),

        new winston.transports.File({
            filename: path.join(__dirname,"logs", "info", "info.log"),
            level: "info"
        })
    ]
})


module.exports = logger