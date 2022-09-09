import { IsEmail, IsNotEmpty, MinLength, IsNumberString} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsNotEmpty()
    hashed_password:string

    @IsNotEmpty()
    @MinLength(5)
    address:string
    
}
