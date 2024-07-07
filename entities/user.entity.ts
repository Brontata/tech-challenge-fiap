import { IUser } from "./models/user.interface";

export class User implements IUser {
    id?: number | undefined;
    email: string;
    password: string;

    constructor(id: number, email:string,password:string){
        this.email = email,
        this.password = password
    }
}