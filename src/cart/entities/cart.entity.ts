import {PrimaryGeneratedColumn,Column} from "typeorm"
export class Cart {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    user_id:number

}
