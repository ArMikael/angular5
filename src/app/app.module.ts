import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PeopleService } from "./people.service";

import { PostsComponent } from './posts/posts.component';
import { NetService} from "./net.service";


@NgModule({
	declarations: [
		AppComponent,
		ProductsListComponent,
		ProductComponent,
		ComponentInteractionComponent,
		PostsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		PeopleService,
		NetService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
