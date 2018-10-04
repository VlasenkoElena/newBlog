import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenaveComponent } from './sidenave/sidenave.component';
import { PostsService } from './shared/services/posts.servece';
import { AuthService } from './shared/services/auth.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonApiInterseptor } from './shared/interseptors/jsonapi.interseptors';
import { TokenInterseptor } from './shared/interseptors/token-interseptor';
import { TokenService } from './shared/services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenaveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostsService, 
    AuthService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonApiInterseptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
