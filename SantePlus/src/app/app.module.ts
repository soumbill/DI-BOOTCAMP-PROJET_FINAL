import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ErrorComponent } from './_utils/error/error.component';
import { HttpClientModule} from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform(input: string): string {
        return `${input} from sample pipe`;
  }
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    SamplePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,



  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook);
    library.addIcons(faTwitter);
    library.addIcons(faInstagram);
    library.addIcons(faSignInAlt);
  }
}

