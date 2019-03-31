import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {InventoryComponent} from '@app/inventory/inventory.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/inventory', pathMatch: 'full' },
    { path: 'inventory', component: InventoryComponent, data: { title: extract('Inventory') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InventoryRoutingModule { }
