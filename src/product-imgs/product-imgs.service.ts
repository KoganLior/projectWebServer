import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductImgDto } from './dto/create-product-img.dto';
import { UpdateProductImgDto } from './dto/update-product-img.dto';
import { Product_photos } from './entities/product-img.entity';

@Injectable()
export class ProductImgsService {
  constructor(@InjectRepository(Product_photos) private productImgRepo:Repository<Product_photos>){}
  create(createProductImgDto: CreateProductImgDto) {
    return 'This action adds a new productImg';
  }

  async findAll() {
    return this.productImgRepo.find();
  }

  async findOne(idNumber: number) {
    const img = await this.productImgRepo.findOneBy({product_id:idNumber})
    return img
  }

  update(id: number, updateProductImgDto: UpdateProductImgDto) {
    return `This action updates a #${id} productImg`;
  }

  remove(id: number) {
    return `This action removes a #${id} productImg`;
  }
}
