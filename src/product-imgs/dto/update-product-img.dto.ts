import { PartialType } from '@nestjs/mapped-types';
import { CreateProductImgDto } from './create-product-img.dto';

export class UpdateProductImgDto extends PartialType(CreateProductImgDto) {}
