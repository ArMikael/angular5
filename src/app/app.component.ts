import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	names: string[];
	isSelected: boolean;
	divWidth: string;
	num: number;

	constructor() {
		this.names = ['Mike', 'Nike', 'Alex', 'Yossi'];
		this.isSelected = false;
		this.divWidth = '200px';
		this.num = 777;
	}

	setNumber(event) {
		this.num = event;
	}
}
