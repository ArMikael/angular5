import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NetService {

  	constructor(private http: HttpClient) {

	}

	getPosts(): Observable<any> {
  		return this.http.get('https://jsonplaceholder.typicode.com/posts');
	}
}