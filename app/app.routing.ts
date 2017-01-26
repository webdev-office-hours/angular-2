import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'orders'},
    {path: 'orders', component: OrdersComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'utilities', component: UtilitiesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [OrdersComponent, ReportsComponent, UtilitiesComponent];

