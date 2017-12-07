import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	id: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];

		// this.route.params.subscribe(params => {
		// 	this.id = params['id'];
		// });
	}

}
