type Client = 1 | 2 | 3;
type FoodOrder = ['raw', 'cocking', 'coocked';

type MealOrder = {
  client: Client;
  foodorder: FoodOrder;
  dishName: string;
  oedrDate: string;
};
const order: MealOrder = {
    client: 1;
    foodorder: 'coocked';
    dishName: 'Hot Stake';
    orderDate: new Date().toISOString()
}
console.log(order)
