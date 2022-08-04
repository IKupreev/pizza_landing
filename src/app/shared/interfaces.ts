export interface apiResponse {
  menu: {
    pizza: pizza[];
  };
}

export interface pizza {
  sku: string;
  image: string;
  name: string;
  description: string;
  size: string;
  price: number;
}

export interface PizzaGroup {
  id: string;
  curPizza: pizza;
  pizzas: pizza[];
  title: string;
}




