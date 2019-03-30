import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {ModelItemComponent} from '@app/model-item/model-item.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/model-item', pathMatch: 'full' },
    { path: 'model-item', component: ModelItemComponent, data: { title: extract('ModelItem') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ModelItemRoutingModule { }
