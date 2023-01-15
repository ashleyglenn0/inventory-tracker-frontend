import { AbstractEntity } from "./abstract-entity";

export class User extends AbstractEntity {
    username:string;
    email:string;
    phoneNumber:string;
    pwHash:string;
}