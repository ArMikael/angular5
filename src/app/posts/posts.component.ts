import { Component, OnInit } from '@angular/core';
import { NetService } from "../net.service";

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	constructor(private  net: NetService) { }

	ngOnInit() {
		this.net.getPosts()
			.subscribe((data: any) => {
				console.log(data);
			}, (err) => {
				console.error(err);
			});
	}

}
