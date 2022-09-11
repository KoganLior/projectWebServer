import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductImgsModule } from './product-imgs/product-imgs.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'password',
    database:'wheyup_database',
    entities:['dist/**/*.entity{.ts,.js}'],
    synchronize:false,
  }), CartModule, UsersModule, ProductsModule, ProductImgsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
