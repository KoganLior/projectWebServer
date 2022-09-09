import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar',{length:50,default:null,nullable:true})
    email:string

    @Column('varchar',{length:50,default:null,nullable:true})
    name:string

    @Column('varchar',{length:255,default:null,nullable:true})
    hashed_password:string

    @Column('varchar',{length:500,default:null,nullable:true})
    address:string
}   
