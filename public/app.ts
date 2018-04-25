import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Product } from './product.js';
import { ProductList } from './productList.js';

@Component({
    selector : 'inventory',
    template : `
        <div class="container">
            <product-list
            [productList]="products"
            (onProductSelected)="productSelected($event)"></product-list>
        </div>
    `,
    directives: [ProductList]
})
class Inventory {
    products: Product[];

    constructor() {
        this.products = [new Product('Moto G5', '10 unit', '/public/images/motog5.jpg', 12000, ['Electronics', 'Mobile']),
                        new Product('Lenovo', '15 unit', '/public/images/lenovo.jpg', 10000, ['Electronics', 'Mobile']),
                        new Product('Google Pixel', '20 unit', '/public/images/gpixel.jpg', 60000, ['Electronics', 'Mobile'])];
    }

    productSelected(event) {
        console.log(event);
    }

}

bootstrap(Inventory);