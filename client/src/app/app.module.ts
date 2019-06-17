import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSnackBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatToolbarModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MenuItemComponent,
    LoginComponent,
    SignupComponent,
    PlaceOrderComponent,
    HomeComponent,
    HeaderComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent, PlaceOrderComponent, AlertModalComponent],
  providers: [CartService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
