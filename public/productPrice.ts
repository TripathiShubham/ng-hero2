import { Component } from 'angular2/core';
import { Product } from './product.js';

@Component({
    selector: 'product-price',
    template: `
        <div>\$ {{ price }}</div>
    `,
    inputs: ['price']
})
export class ProductPrice {
    price: number;
}