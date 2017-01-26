import {Injectable} from '@angular/core';
import { Order } from './orders/order';
import { ORDERS } from './mock-orders';

@Injectable()
export class OrderService {
    getOrders(): Promise<Order[]> {
        return Promise.resolve(ORDERS);
    }
}

