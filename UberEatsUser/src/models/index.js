// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED"
};

const { Courier, Basket, OrderDish, Order, BasketDish, User, Dish, Restaurant } = initSchema(schema);

export {
  Courier,
  Basket,
  OrderDish,
  Order,
  BasketDish,
  User,
  Dish,
  Restaurant,
  TransportationModes,
  OrderStatus
};