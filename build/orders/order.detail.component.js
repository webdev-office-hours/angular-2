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
var OrderDetailComponent = (function () {
    function OrderDetailComponent() {
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.order = { id: 12345, description: 'test name' };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OrderDetailComponent.prototype, "order", void 0);
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'order-detail',
            styleUrls: [
                'assets/first.component.css'
            ],
            template: "\n                \n                    <div class=\"card-box\">\n                        <h2 class=\"text-dark\">Order ID: {{order.id}}</h2>\n                        <h5 class=\"text-dark\">{{order.description}}</h5>\n                    </div>\n\n               ",
        }), 
        __metadata('design:paramtypes', [])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order.detail.component.js.map