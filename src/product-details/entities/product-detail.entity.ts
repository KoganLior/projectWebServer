import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Product_details {
    @PrimaryGeneratedColumn()
    id:number

    @Column("int",{nullable:true,default:null})
    product_id:number

    @Column("int",{nullable:true,default:null})
    quantity_in_stock:number

    @Column("double",{nullable:true,default:null})
    price:number

    @Column("varchar",{length:20,nullable:true,default:null})
    size:string



}
