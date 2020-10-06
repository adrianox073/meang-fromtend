import { UsersComponent } from './@admin/pages/users/users.component';
import { DashboardComponent } from './@admin/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './@public/pages/contact/contact.component';
import { HomeComponent } from './@public/pages/home/home.component';


const routes: Routes = [
  // {
  //   path: `home`, loadChildren: () =>
  //     import('./@public/pages/home/home.module').then(m => m.HomeModule)
  // },
  
  // {
  //   path: `contact`, loadChildren: () =>
  //     import('./@public/pages/contact/contact.module').then(m => m.ContactModule)
  // },
  // { path: ``, redirectTo: `home`, pathMatch: `full` }


  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
