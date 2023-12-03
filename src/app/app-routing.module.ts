import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConnecterComponent } from './pages/connecter/connecter.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { InscritComponent } from './pages/inscrit/inscrit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'connecter',component:ConnecterComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'inscrit',component:InscritComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
