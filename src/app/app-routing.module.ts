import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [

	{ path: 'product', component: ProductComponent },
	{ path: 'inventory', component: InventoryComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
