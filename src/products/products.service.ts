import { Injectable } from '@nestjs/common';
import { ProductsDto } from './products.dto';
@Injectable()
export class ProductsService {
  private _products: ProductsDto[] = [
    // -------------------fake data --------------------------------------------
    {
      id: 1,
      name: 'Banana whey portein powder',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Vanilla whey portein powder',
      categoryId: 1,
    },
    { id: 3, name: 'Chocolate whey portein powder', categoryId: 1 },
    {
      id: 4,
      name: 'Bluebarry whey portein powder',
      categoryId: 2,
    },
    {
      id: 5,
      name: 'Cheesecake whey portein powder',
      categoryId: 2,
    },
  ];
  //   ---------------------------------------------------------------------------

  // ----------------------------- The functions of the service --------------------------------

  getProductById(id: number): ProductsDto {
    return this._products.find((product) => product.id === id);
  }

  getProductByName(name: string): ProductsDto {
    return this._products.find((product) => product.name === name);
  }

  // This function will return all the items with category id you give it
  getProductsByCategoryID() {}
}
