import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PeopleService } from "./people.service";


@NgModule({
	declarations: [
		AppComponent,
		ProductsListComponent,
		ProductComponent,
		ComponentInteractionComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		PeopleService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
