import {Product} from '../types/product';

export type ProductStackParamList = {
  ProductList: undefined;
  ProductDetail: {product: Product};
};

export type RootTabParamList = {
  Home: undefined;
  Mini: undefined;
  GroupShopping: undefined;
  Cart: undefined;
  Profile: undefined;
};
