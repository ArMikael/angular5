import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeopleService } from './../people.service';

@Component({
	selector: 'app-component-interaction',
	templateUrl: './component-interaction.component.html',
	styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
	@Input() myNumber?: number;

	// @Output() numberSet: EventEmitter<number> = new EventEmitter<number>();
	@Output() myNumberChange: EventEmitter<number> = new EventEmitter<number>();

	peopleList: string[];

	constructor(private people: PeopleService) {
		this.people = people;
	}

	ngOnInit() {
		this.peopleList = this.people.getPeople();
	}

	setNumber() {
		this.myNumberChange.emit(this.myNumber);
		// this.numberSet.emit(this.myNumber);
	}

}
