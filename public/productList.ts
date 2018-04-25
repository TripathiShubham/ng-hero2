import { Component, EventEmitter } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Product } from './product.js';
import { ProductImage } from './productImage.js';
import { ProductPrice } from './productPrice.js';

@Component({
    selector: 'product-list',
    directives: [ProductImage, ProductPrice],
    template: `
        <div>
            <div class="row" *ngFor="#product of productList"
            (click)="clicked(product)"
            [class.selected]="isSelected(product)">
            <div class="col-md-3">
                <product-image [product]="product"></product-image>
            </div>
            <div class="col-md-6">
                Product name : {{ product.name}}  
                Product sku : {{ product.sku }}
            </div>
            <div class="col-md-3">
                <product-price [price]="product.price"></product-price>
            </div>
            </div>
        </div>
    `,
    inputs: ['productList'],
    outputs: ['onProductSelected']
})
export class ProductList {
    productList: Product[];
    currentProduct: Product;
    onProductSelected: EventEmitter<Product>;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    clicked(product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if(!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}