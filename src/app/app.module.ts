import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PeopleService } from "./people.service";

import { PostsComponent } from './posts/posts.component';
import { NetService} from "./net.service";
import { PostComponent } from './post/post.component';


@NgModule({
	declarations: [
		AppComponent,
		ProductsListComponent,
		ProductComponent,
		ComponentInteractionComponent,
		PostsComponent,
		PostComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{
				path: '',
				component: ComponentInteractionComponent
			},
			{
				path: 'posts/:id',
				component: PostComponent
			},
			{
				path: 'posts',
				component: PostsComponent
			},
			{
				path: 'products',
				component: ProductsListComponent
			},
			{
				path: 'product',
				component: ProductComponent
			},
			{
				path: 'interaction',
				component: ComponentInteractionComponent
			},
			{
				path: '**',
				redirectTo: '/'
			}

		])
	],
	providers: [
		PeopleService,
		NetService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
