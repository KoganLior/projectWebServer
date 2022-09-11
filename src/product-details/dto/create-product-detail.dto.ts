import { IsEmail, IsNotEmpty, IsNumberString, isNotEmpty} from "class-validator";

export class CreateProductDetailDto {

    @IsNotEmpty()
    @IsNumberString()
    product_id:number

    @IsNotEmpty()
    @IsNumberString()
    quantity_in_stock:number

    @IsNotEmpty()
    price:number

    @IsNotEmpty()
    size:string
}
