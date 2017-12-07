import { Component, OnInit } from '@angular/core';

interface Product {
	name: string;
	price: number;
	quantity: number;
}

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	newProduct: Product;
	products: Product[];

	private initProduct() {
		this.newProduct = <any>{}; // Ignore Product interface for init product reset only
	}

	constructor() { }

	ngOnInit() {
		this.products = [];
		this.initProduct();
	}

	addProduct() {
		this.products.push({
			name: this.name,
			price: this.price,
			quantity: this.quantity
		});
	}

}
