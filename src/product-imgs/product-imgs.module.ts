import { Module } from '@nestjs/common';
import { ProductImgsService } from './product-imgs.service';
import { ProductImgsController } from './product-imgs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_photos } from './entities/product-img.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product_photos])],
  controllers: [ProductImgsController],
  providers: [ProductImgsService]
})
export class ProductImgsModule {}
