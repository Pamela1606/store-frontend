import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {ItemImageComponent} from '@app/item-image/item-image.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/itemImage', pathMatch: 'full' },
    { path: 'itemImage', component: ItemImageComponent, data: { title: extract('ItemImage') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ItemImageRoutingModule { }
