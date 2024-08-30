type FoodOrder = 'raw' | 'coocking' | 'coocked' | 'burned';

type Order = {
  name: string;
  ingridients: string[];
  servirings: number;
  status: FoodOrder;
};
const order: Order = {
    name: 'Spagetti';
    ingridients: ['Cheese sous', 'Ketchup', 'mayonnaise', '' ];
    servirings: 2;
    status: "coocked";
};
order.status = "coocked";
order.status = "coocking";
order.status = "raw";