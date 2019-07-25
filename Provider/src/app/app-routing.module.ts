import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'curlistings', loadChildren: './pages/curlistings/curlistings.module#CurlistingsPageModule' },
  { path: 'newlistings', loadChildren: './pages/newlistings/newlistings.module#NewlistingsPageModule' },
  { path: 'viewlisting', loadChildren: './pages/viewlisting/viewlisting.module#ViewlistingPageModule' },
  { path: 'updatelisting', loadChildren: './pages/updatelisting/updatelisting.module#UpdatelistingPageModule' },
  { path: 'viewbookings', loadChildren: './pages/viewbookings/viewbookings.module#ViewbookingsPageModule' },
  { path: 'viewprofile', loadChildren: './pages/viewprofile/viewprofile.module#ViewprofilePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'updateprofile', loadChildren: './pages/updateprofile/updateprofile.module#UpdateprofilePageModule' },
  { path: 'updateprofile', loadChildren: './pages/updateprofile/updateprofile.module#UpdateprofilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
