import { Module } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';
import { ProductDetailsController } from './product-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_details } from './entities/product-detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product_details])],
  controllers: [ProductDetailsController],
  providers: [ProductDetailsService]
})
export class ProductDetailsModule {}
