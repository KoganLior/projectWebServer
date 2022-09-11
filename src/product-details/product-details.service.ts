import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';
import { Product_details } from './entities/product-detail.entity';

@Injectable()
export class ProductDetailsService {
  constructor(@InjectRepository(Product_details) private productDetailsRepo:Repository<Product_details>){}
  create(createProductDetailDto: CreateProductDetailDto) {
    return 'This action adds a new productDetail';
  }

  async findAll() {
    return this.productDetailsRepo.find();
  }

  async findOne(idNumber: number) { 
    
    const product = await this.productDetailsRepo.findBy({product_id:idNumber})
    return product
  }

  update(id: number, updateProductDetailDto: UpdateProductDetailDto) {
    return `This action updates a #${id} productDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDetail`;
  }
}
