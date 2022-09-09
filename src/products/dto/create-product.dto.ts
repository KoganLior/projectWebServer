import { IsEmail, IsNotEmpty, MinLength, IsNumberString} from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsNumberString()
    category_id:number

    
}
