import dotenv from 'dotenv';
dotenv.config();

export const Config = {
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PWD,
        name: process.env.DATABASE_NAME
    }
}