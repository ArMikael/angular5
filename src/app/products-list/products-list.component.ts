import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
	productsList: any[];
	productName: string;
	productPrice: number;
	productQuantity: number;
	isBought: boolean;

	constructor() {
		this.productsList = [];
		this.productName = '';
		this.productPrice = null;
		this.productQuantity = 1;
		this.isBought = false;
	}

	addProduct = function() {
		let newProduct = {
			name: this.productName,
			price: this.productPrice * this.productQuantity,
			quantity: this.productQuantity,
			isBought: this.isBought
		};

		this.productsList.push(newProduct);
	};

	ngOnInit() {
	}
}
