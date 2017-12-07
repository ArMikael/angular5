import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-component-interaction',
	templateUrl: './component-interaction.component.html',
	styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
	@Input() myNumber?: number;

	// @Output() numberSet: EventEmitter<number> = new EventEmitter<number>();
	@Output() myNumberChange: EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {

	}

	setNumber() {
		this.myNumberChange.emit(this.myNumber);
		// this.numberSet.emit(this.myNumber);
	}

}
