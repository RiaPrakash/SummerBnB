import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'curlistings', loadChildren: './pages/curlistings/curlistings.module#CurlistingsPageModule' },
  { path: 'viewlisting', loadChildren: './pages/viewlisting/viewlisting.module#ViewlistingPageModule' },
  { path: 'viewbookings', loadChildren: './pages/viewbookings/viewbookings.module#ViewbookingsPageModule' },
  { path: 'viewprofile', loadChildren: './pages/viewprofile/viewprofile.module#ViewprofilePageModule' },
  { path: 'updateprofile', loadChildren: './pages/updateprofile/updateprofile.module#UpdateprofilePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'makebooking', loadChildren: './pages/makebooking/makebooking.module#MakebookingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
