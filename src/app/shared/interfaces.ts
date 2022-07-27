export interface apiResponse {
  pizza: {
   menu: Menu[];
  };
}

export interface Menu {
  id?: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export interface Product {
  id?: string;
  title: string;
  price: string;
}


