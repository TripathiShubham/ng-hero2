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
var core_1 = require("angular2/core");
var productImage_js_1 = require("./productImage.js");
var productPrice_js_1 = require("./productPrice.js");
var ProductList = (function () {
    function ProductList() {
        this.onProductSelected = new core_1.EventEmitter();
    }
    ProductList.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductList.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    return ProductList;
}());
ProductList = __decorate([
    core_1.Component({
        selector: 'product-list',
        directives: [productImage_js_1.ProductImage, productPrice_js_1.ProductPrice],
        template: "\n        <div>\n            <div class=\"row\" *ngFor=\"#product of productList\"\n            (click)=\"clicked(product)\"\n            [class.selected]=\"isSelected(product)\">\n            <div class=\"col-md-3\">\n                <product-image [product]=\"product\"></product-image>\n            </div>\n            <div class=\"col-md-6\">\n                Product name : {{ product.name}}  \n                Product sku : {{ product.sku }}\n            </div>\n            <div class=\"col-md-3\">\n                <product-price [price]=\"product.price\"></product-price>\n            </div>\n            </div>\n        </div>\n    ",
        inputs: ['productList'],
        outputs: ['onProductSelected']
    }),
    __metadata("design:paramtypes", [])
], ProductList);
exports.ProductList = ProductList;
//# sourceMappingURL=productList.js.map