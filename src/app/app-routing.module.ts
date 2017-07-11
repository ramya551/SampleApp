import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [

	{ path: 'product', component: ProductComponent },
	{ path: 'inventory', component: InventoryComponent },
	{ path: 'productdetails', component: ProductFormComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
