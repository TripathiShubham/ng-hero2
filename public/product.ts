export class Product {

    constructor (
        public name: String,
        public sku: String,
        public imageUrl: String,
        public price: number,
        public department: String[]
    ) {}
}