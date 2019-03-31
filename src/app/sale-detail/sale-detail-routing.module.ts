import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {SaleDetailComponent} from '@app/sale-detail/sale-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/sale-detail', pathMatch: 'full' },
    { path: 'sale-detail', component: SaleDetailComponent, data: { title: extract('SaleDetail') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SaleDetailRoutingModule { }
