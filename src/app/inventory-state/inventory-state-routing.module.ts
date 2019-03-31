import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {InventoryStateComponent} from '@app/inventory-state/inventory-state.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/inventoryState', pathMatch: 'full' },
    { path: 'inventoryState', component: InventoryStateComponent, data: { title: extract('InventoryState') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InventoryStateRoutingModule { }
