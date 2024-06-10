import mysql from 'mysql2';
import { Config } from "../config";

export class AbstractModels {
    connexion = null;
    constructor() {
        this.singleton();
    }
    singleton() {
        if(this.connexion === null) {
            this.connexion = mysql.createConnection({
                host: Config.database.host,
                user: Config.database.user,
                password: Config.database.password,
                database: Config.database.name,
            })
        } else {
            return this.connexion;
        }
    }
}