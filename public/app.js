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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var product_js_1 = require("./product.js");
var productList_js_1 = require("./productList.js");
var Inventory = (function () {
    function Inventory() {
        this.products = [new product_js_1.Product('Moto G5', '10 unit', '/public/images/motog5.jpg', 12000, ['Electronics', 'Mobile']),
            new product_js_1.Product('Lenovo', '15 unit', '/public/images/lenovo.jpg', 10000, ['Electronics', 'Mobile']),
            new product_js_1.Product('Google Pixel', '20 unit', '/public/images/gpixel.jpg', 60000, ['Electronics', 'Mobile'])];
    }
    Inventory.prototype.productSelected = function (event) {
        console.log(event);
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        template: "\n        <div class=\"container\">\n            <product-list\n            [productList]=\"products\"\n            (onProductSelected)=\"productSelected($event)\"></product-list>\n        </div>\n    ",
        directives: [productList_js_1.ProductList]
    }),
    __metadata("design:paramtypes", [])
], Inventory);
browser_1.bootstrap(Inventory);
//# sourceMappingURL=app.js.map