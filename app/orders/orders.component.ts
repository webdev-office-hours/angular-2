import { Component } from '@angular/core';
import {Order} from './order';
import { OrderService } from '../orders.service';

const ORDERS: Order[] = [
    { id: 12345, description: 'U-Verse - 100Mbps' },
    { id: 22345, description: 'U-Verse - 20Mbps' },
    { id: 32345, description: 'U-Verse - 60Mbps' },
    { id: 42345, description: 'U-Verse - 50Mbps' },
    { id: 52345, description: 'U-Verse - 20Mbps' },
    { id: 62345, description: 'U-Verse - 70Mbps' },
    { id: 72345, description: 'U-Verse - 20Mbps' },
    { id: 82345, description: 'U-Verse - 80Mbps' },
    { id: 92345, description: 'U-Verse - 20Mbps' },
    { id: 11111, description: 'U-Verse - 10Mbps' }
];

@Component ({
selector: 'my-app',
styleUrls: [
    'assets/first.component.css'
], 
providers: [OrderService],
template: `         <div class="col-lg-12">
                      <div class="card-header">
                          <h4>Orders</h4>
                      </div>
                      <div class="card-body">
                        <div class="col-lg-3" *ngFor="let order of orders" 
                            (click)="selectOrderCall(order)">
                            <div class="card-box">
                              <h4 class="text-dark">Order ID: {{order.id}}</h4>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="card-header">
                          <h4>Order Details</h4>
                      </div>
                      <div class="card-body">
                        <order-detail [order]="selectedOrder"></order-detail>
                      </div>
                    <div>
            `
})
export class OrdersComponent {
  orders = ORDERS;
  selectedOrder: Order;

  constructor(private OrderService: OrderService) {

  }

  getOrders() : void {
      this.OrderService.getOrders().then(orders => this.orders = orders);
  }

  ngOnInit(): void {
      this.getOrders();
  }

  selectOrderCall(order: Order): void {
      this.selectedOrder = order;
  }

}