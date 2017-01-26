import {Component, OnInit, Input} from '@angular/core';
import {Order} from './order';

@Component({
    selector: 'order-detail',
    styleUrls: [
        'assets/first.component.css'
    ], 
    template: `
                
                    <div class="card-box">
                        <h2 class="text-dark">Order ID: {{order.id}}</h2>
                        <h5 class="text-dark">{{order.description}}</h5>
                    </div>

               `,
})
export class OrderDetailComponent implements OnInit {
    
    ngOnInit()    {
        this.order = { id: 12345, description: 'test name' };
    }

    @Input()
    order: Order;
    // orderName = this.order;
}