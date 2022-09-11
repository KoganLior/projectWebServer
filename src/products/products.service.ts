import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepo: Repository<Products>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productsRepo.save(createProductDto);
  }

  findAll() {
    return this.productsRepo.find();
  }

  async findOne(idNumber: number) {
    const product = await this.productsRepo.findOneBy({ id: idNumber });
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async getFirst8() {
    const products = await this.productsRepo.find({
      take: 8,
    });
    return products;
  }
}
