import { IsString, IsNotEmpty, IsNumber} from "class-validator";

export class ProductImgDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @IsNotEmpty()
    @IsString()
    url: string;

  }
