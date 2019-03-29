import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {BrandComponent} from '@app/brand/brand.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/brand', pathMatch: 'full' },
    { path: 'brand', component: BrandComponent, data: { title: extract('Brand') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrandRoutingModule { }
