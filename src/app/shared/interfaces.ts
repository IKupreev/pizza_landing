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
  price: number;
}




