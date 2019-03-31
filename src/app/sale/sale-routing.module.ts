import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {SaleComponent} from '@app/sale/sale.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/sale', pathMatch: 'full' },
    { path: 'sale', component: SaleComponent, data: { title: extract('Sale') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SaleRoutingModule { }
