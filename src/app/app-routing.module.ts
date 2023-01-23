import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent,OktaAuthGuard } from '@okta/okta-angular';
import { ProfileComponent } from './component/profile/profile.component';
import { ProtectedComponent } from './component/protected/protected.component';



const routes: Routes = [{ path: 'login/callback', component: OktaCallbackComponent },
{
  path: 'protected',
  loadChildren: () => import('./component/protected/protected.component').then(m => m.ProtectedComponent),
  canLoad: [OktaAuthGuard]
},

{ path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
