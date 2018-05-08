import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogeditComponent } from './blogedit/blogedit.component';


import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CreateComponent,
    NotFoundComponent,
    BlogviewComponent,
    BlogeditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path :'home', component: HomeComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'create', component :CreateComponent},
      {path:'blog/:blogId',component:BlogviewComponent},
      {path :'edit/:blogId', component:BlogeditComponent},
      {path:'**',component: NotFoundComponent}
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
