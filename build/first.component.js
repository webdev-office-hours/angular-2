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
var FirstComponent = (function () {
    function FirstComponent() {
    }
    FirstComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: [
                'assets/first.component.css'
            ],
            template: "\n                <div class=\"row\">\n                            <div class=\"col-lg-3\">\n                        \t\t<div class=\"card-box\">\n                        \t\t\t<h4 class=\"text-dark\">Order: 114589</h4>\n                        \t\t</div>\n                            </div>\n\n                            <div class=\"col-lg-3\">\n                        \t\t<div class=\"card-box\">\n                        \t\t\t<h4 class=\"text-dark\">Order: 234589</h4>\n                        \t\t</div>\n                            </div>\n\n                            <div class=\"col-lg-3\">\n                        \t\t<div class=\"card-box\">\n                        \t\t\t<h4 class=\"text-dark\">Order: 938882</h4>\n                        \t\t</div>\n                            </div>\n\n                            <div class=\"col-lg-3\">\n                        \t\t<div class=\"card-box\">\n                        \t\t\t<h4 class=\"text-dark\">Order: 764467</h4>\n                        \t\t</div>\n                            </div>\n\n                        </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map