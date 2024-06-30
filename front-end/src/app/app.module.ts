import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebpageComponent } from './components/webpage/webpage.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { EditGalleryComponent } from './components/gallery/edit-gallery/edit-gallery.component';
import { EditPartnerComponent } from './components/partner/edit-partner/edit-partner.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { HomeComponent } from './components/home/home.component';
import { HomearComponent } from './components/homear/homear.component';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    WebpageComponent,
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProjectComponent,
    GalleryComponent,
    PartnerComponent,
    EditGalleryComponent,
    EditPartnerComponent,
    EditProjectComponent,
    HomeComponent,
    HomearComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'an',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
