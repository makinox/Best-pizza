import {ProductsI} from './Products';

export interface StoreI {
  id?: number;
  name?: string;
  address?: string;
  description?: string;
  stores?: Array<ProductsI>;
}
