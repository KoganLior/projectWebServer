import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { ProductImgsService } from './product-imgs.service';
import { CreateProductImgDto } from './dto/create-product-img.dto';
import { UpdateProductImgDto } from './dto/update-product-img.dto';

@Controller('productImg')
export class ProductImgsController {
  constructor(private readonly productImgsService: ProductImgsService) {}

  @Post()
  create(@Body() createProductImgDto: CreateProductImgDto) {
    return this.productImgsService.create(createProductImgDto);
  }

  @Get("all")
  findAll() {
    return this.productImgsService.findAll();
  }

  @Get('/id/:id')
  findOne(@Param('id',ParseIntPipe) id:number) {
    return this.productImgsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductImgDto: UpdateProductImgDto) {
    return this.productImgsService.update(+id, updateProductImgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productImgsService.remove(+id);
  }
}
