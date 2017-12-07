import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
	constructor() {

	}

	getPeople(): string[] {
		return ['a', 'b', 'c'];
	}

}
