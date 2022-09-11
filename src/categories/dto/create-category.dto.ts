import { IsEmail, IsNotEmpty, IsNumberString, isNotEmpty} from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    name:string

    
}


