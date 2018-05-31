import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {AboutComponent, PortafolioComponent, ProductoComponent, SearchComponent} from './components/index.paginas';
const routes:Routes=[
{
  path: 'home', component: PortafolioComponent
},
{
  path: 'about', component: AboutComponent
},
{
  path: 'producto/:id', component: ProductoComponent
},
{
  path: 'buscar/:termino', component: SearchComponent
},
{
  path: '**', pathMatch: 'full', redirectTo: 'home'
}
];
// @NgModule({
//   imports: [

//   ],
//   declarations: []
// })
// export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes);
// export const app_routing = RouterModule.forRoot(routes, {useHash:true});

