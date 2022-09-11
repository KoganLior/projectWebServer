import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id:number

    @Column("varchar",{length:30,nullable:true,default:null})
    name:string
}
