import { Injectable } from '@nestjs/common';
import { ProductImgDto } from './productImg.dto';
@Injectable()
export class ProductImgService {
  private _products: ProductImgDto[] = [
    // -------------------fake data --------------------------------------------
    {
      id: 1,
      url: 'https://via.placeholder.com/600x400/e0b1b1/e36ddd',
      productId: 1,
    },
    {
      id: 2,
      url: 'https://via.placeholder.com/600x400/8acfe6/cee0c9',
      productId: 2,
    },
    { id: 3, url: 'https://via.placeholder.com/600x400/d6d67a/f02727', productId: 3 },
    {
      id: 4,
      url: 'https://via.placeholder.com/600x400/000000/2d288f',
      productId: 4,
    },
    {
      id: 5,
      url: 'https://via.placeholder.com/600x400/e0b1b1/e36ddd',
      productId: 5,
    },
  ];
  //   ---------------------------------------------------------------------------

  // ----------------------------- The functions of the service --------------------------------

  getProductImg(id: number):string {
    return this._products.find((product) => product.productId === id).url;
  }

  
}
