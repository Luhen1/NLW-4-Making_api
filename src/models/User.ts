import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("users") // entity means, in oop, a database table
class User{
    //atributes
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { User }