import {ProductI} from './Product';

export interface StoreI {
  id?: number;
  name?: string;
  address?: string;
  description?: string;
  products?: Array<ProductI>;
}
