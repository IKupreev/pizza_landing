export interface apiResponse {
  pizza: {
   menu: Menu[];
  };
}

export interface Menu {
  id?: string;
  title: string;
  description: string;
  price: string;
}


