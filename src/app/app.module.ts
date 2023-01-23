import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { ProfileComponent } from './component/profile/profile.component';
import { ProtectedComponent } from './component/protected/protected.component';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-11752115.okta.com/oauth2/default',
  clientId: '0oa813qnibprlIRzE5d7',
  redirectUri: window.location.origin + '/login/callback'
});

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: { oktaAuth } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
