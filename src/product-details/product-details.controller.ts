import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';

@Controller('productDetails')
export class ProductDetailsController {
  constructor(private readonly productDetailsService: ProductDetailsService) {}

  @Post()
  create(@Body() createProductDetailDto: CreateProductDetailDto) {
    return this.productDetailsService.create(createProductDetailDto);
  }

  @Get("all")
  findAll() {
    return this.productDetailsService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.productDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() updateProductDetailDto: UpdateProductDetailDto) {
    return this.productDetailsService.update(+id, updateProductDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDetailsService.remove(+id);
  }
}
