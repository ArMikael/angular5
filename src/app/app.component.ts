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
	
	private _num: number;

	get num(): number {
		return this._num;
	}

	set num(value: number) {
		this._num = value;

		console.log('Num change to ' + value);
	}

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
