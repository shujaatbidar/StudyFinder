import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { WebAPI } from './web-api.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { BeaconCardsComponent } from './beacon-cards/beacon-cards.component';
import { BeaconSearchComponent } from './beacon-search/beacon-search.component';
import { BeaconListComponent } from './beacon-list/beacon-list.component';
import { BeaconPageComponent } from './beacon-page/beacon-page.component';
import { RouterModule} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { BeaconCreateComponent } from './beacon-create/beacon-create.component'
import { UserDiscoveryComponent } from './user-discovery/user-discovery.component';
import { MdlModule } from '@angular-mdl/core';


import { BootstrapModalModule } from 'ng2-bootstrap-modal';

export const firebaseConfig = {
  apiKey: "AIzaSyC6ySrInpH3svhfDbZDIWc3dhHAOvZW2kk",
  authDomain: "studygroupfinder-d172b.firebaseapp.com",
  databaseURL: "https://studygroupfinder-d172b.firebaseio.com",
  projectId: "studygroupfinder-d172b",
  storageBucket: "studygroupfinder-d172b.appspot.com",
  messagingSenderId: "390539351889"
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
	  ChatComponent,
    UserDiscoveryComponent,
    BeaconCardsComponent,
    BeaconSearchComponent,
    BeaconListComponent,
    BeaconPageComponent,
    LoginComponent,
    PasswordComponent,
    RegisterComponent,
    LoginPageComponent,
    ProfileComponent,
      UserProfileComponent,
      UserEditComponent,
        BeaconCreateComponent,
    UserDiscoveryComponent,
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    MdlModule,
        RouterModule.forRoot([
        {path: '', component: MapComponent},
        {path: 'map', component: MapComponent},
        {path: 'user-discovery', component: UserDiscoveryComponent},
        {path: 'beacon-create', component: BeaconCreateComponent},
        {path: 'login-page', component: LoginPageComponent},
        { path: 'profile', component: ProfileComponent },
        { path: 'user-profile', component: UserProfileComponent },
        { path: 'user-edit', component: UserEditComponent },
        {path: '*other', component: MapComponent}
    ]),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC6ySrInpH3svhfDbZDIWc3dhHAOvZW2kk',
      libraries: ["places"]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PasswordComponent
    ],
  providers: [
  WebAPI,
  BeaconCardsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
