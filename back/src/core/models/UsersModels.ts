import { AbstractModels } from "../abstract/AbstractModels";

export class UsersModels extends AbstractModels {
    constructor() {
        super();
    }
    all(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    SELECT 
                    u.id, u.username, u.firstname, 
                    u.lastname, u.email, u.password, r.name AS roles 
                    FROM users u
                    JOIN roles r ON u.role_id = r.id
                `,
                (err: any, res: any) => {
                    if(err) reject(err);
                    resolve(res);
                }
            )
        })
    }
    /** AUTHENTICATION */
    login(user: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    SELECT 
                    u.id, u.username, u.firstname, 
                    u.lastname, u.email, u.password, r.name AS roles 
                    FROM users u
                    JOIN roles r ON u.role_id = r.id
                    WHERE u.email = ?
                `, [Object.values(user)],
                (err: any, res: any) => {
                    if(err) reject(err);
                    resolve(res);
                }
            )
        })
    }
}