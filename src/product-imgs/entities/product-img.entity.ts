import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Product_photos {
    @PrimaryGeneratedColumn()
    id:number

    @Column("int",{nullable:true,default:null})
    product_id:number

    @Column("varchar",{length:750,nullable:true,default:null})
    source:string
}
