"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var orders_service_1 = require('../orders.service');
var ORDERS = [
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
var OrdersComponent = (function () {
    function OrdersComponent(OrderService) {
        this.OrderService = OrderService;
        this.orders = ORDERS;
    }
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.OrderService.getOrders().then(function (orders) { return _this.orders = orders; });
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrdersComponent.prototype.selectOrderCall = function (order) {
        this.selectedOrder = order;
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: [
                'assets/first.component.css'
            ],
            providers: [orders_service_1.OrderService],
            template: "         <div class=\"col-lg-12\">\n                      <div class=\"card-header\">\n                          <h4>Orders</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"col-lg-3\" *ngFor=\"let order of orders\" \n                            (click)=\"selectOrderCall(order)\">\n                            <div class=\"card-box\">\n                              <h4 class=\"text-dark\">Order ID: {{order.id}}</h4>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"card-header\">\n                          <h4>Order Details</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <order-detail [order]=\"selectedOrder\"></order-detail>\n                      </div>\n                    <div>\n            "
        }), 
        __metadata('design:paramtypes', [orders_service_1.OrderService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map