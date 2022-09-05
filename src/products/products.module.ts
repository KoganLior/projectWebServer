import { Module } from "@nestjs/common";
import { ProductImgService } from "./productImg.service";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[],
    providers:[ProductsService,ProductImgService],
    controllers:[ProductsController]
})
export class ProductsModule{}
