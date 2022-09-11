import { IsEmail, IsNotEmpty, IsNumberString, isNotEmpty} from "class-validator";

export class CreateProductImgDto {

    @IsNotEmpty()
    @IsNumberString()
    product_id:number

    @IsNotEmpty()
    source:string
}
