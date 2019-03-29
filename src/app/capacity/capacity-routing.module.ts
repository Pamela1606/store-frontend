import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {CapacityComponent} from '@app/capacity/capacity.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/capacity', pathMatch: 'full' },
    { path: 'capacity', component: CapacityComponent, data: { title: extract('Capacity') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CapacityRoutingModule { }
