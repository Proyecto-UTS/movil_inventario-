import {config as dotenv} from "dotenv"
dotenv();

export const config = {
    user: process.env.DB_USER,
    host:process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD
}