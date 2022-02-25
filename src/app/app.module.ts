import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import angular.module('myModule', ['angular-flexslider']);

// import {platformBrowser} from "../../node_modules/@angular/platform-browser";
// import { platformBrowser } from '../../node_modules/@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './modules/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './modules/header/header.component';

// import { SliderComponent } from './slider/slider.component';
// import { SliderComponent } from '@angular-slider/ngx-slider/slider.component';

import { NgImageSliderModule } from 'ng-image-slider';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';

// import { NgImageSliderModule } from 'ng-image-slider';
// import {CarouselModule} from 'primeng/carousel';
// import { ButtonModule } from 'primeng/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginComponent } from './modules/auth/components/login/login.component';
import {SignupComponent } from './modules/auth/components/signup/signup.component';
import {FooterComponent } from './modules/footer/footer.component';


import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SingleComponent } from './modules/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    CarouselModule,
    ButtonModule,
    NgImageSliderModule,
    // NgxSliderModule,
    MatIconModule,
    // NgImageSliderModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonToggleModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
