import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NetService {
	private posts: any;

  	constructor(private http: HttpClient) {

	}

	getPosts(): Observable<any> {
  		return this.http.get('https://jsonplaceholder.typicode.com/posts');
	}

	getCachedPosts(): Observable<any> {
  		return new Observable<any>(observ => {
			if (this.posts) {
				observ.next(this.posts);
				observ.complete();
				return;
			}

			this.getPosts().subscribe(posts => {
				this.posts = posts;
				observ.next(this.posts);
				observ.complete();
			});
		});

	}
}
