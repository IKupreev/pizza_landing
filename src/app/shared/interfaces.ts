export enum pizzaSizes {
  SM = "Small",
  MD = "Medium",
  LG = "Large"
}

export interface apiResponse {
  menu: {
    pizza: Pizza[];
  };
}

export interface Pizza {
  name: string;
  price: number;
  size: pizzaSizes;
  image: string;
  description: string;
  sku: string;
}

export interface PizzaGroup {
  id: string;
  curPizza: Pizza;
  pizzas: Pizza[];
  image: string;
  title: string;
  description: string;
}




