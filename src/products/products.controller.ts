import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsDto } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}
  @Get(":id")
  getProductById(@Param('id',ParseIntPipe) id:number): ProductsDto {
    return this.productsService.getProductById(id)
  }
}