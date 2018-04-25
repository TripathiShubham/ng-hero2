import { Component } from 'angular2/core';
import { Product } from './product.js';

@Component({
    selector: 'product-image',
    template: `
        <div>
            <img [src]="product.imageUrl" style="height:40px;width:40px;">
        </div>
    `,
    inputs: ['product']
})
export class ProductImage {
    product: Product;
}