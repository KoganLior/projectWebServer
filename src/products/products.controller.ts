import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductImgService } from './productImg.service';
import { ProductsDto } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService,private readonly productImgService:ProductImgService){}
  @Get(":id")
  getProductById(@Param('id',ParseIntPipe) id:number): ProductsDto {
    return this.productsService.getProductById(id)
  }
  @Get("image/:id")
 getProductImgById(@Param('id',ParseIntPipe) id:number): string {
   return this.productImgService.getProductImg(id)
 }
  
}