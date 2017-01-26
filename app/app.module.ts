import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule, routingComponents} from './app.routing';
import { OrderDetailComponent } from './orders/order.detail.component';

@NgModule({
imports: [ BrowserModule, AppRoutingModule ],
declarations: [ AppComponent, routingComponents, OrderDetailComponent],
bootstrap: [ AppComponent ]
})
export class AppModule { }