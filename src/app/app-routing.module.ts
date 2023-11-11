import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListProductsComponent} from './list-products/list-products.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommandeValidationComponent} from './commande-validation/commande-validation.component';
import {MessageComponent} from './message/message.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'categories/:id', component: ListProductsComponent},
  { path: 'commande/:productId', component: CommandeValidationComponent},
  { path: 'message', component: MessageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
