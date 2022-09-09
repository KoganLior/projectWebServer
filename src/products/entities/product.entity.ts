import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id:number

    @Column("varchar",{length:70,default:null,nullable:false})
    name: string

    @Column("int",{nullable:true})
    category_id: number
}
