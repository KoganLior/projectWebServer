import { IsString, IsNotEmpty, IsNumber} from "class-validator";

export class ProductsDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

  }
