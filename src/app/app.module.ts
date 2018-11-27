import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MovieServiceService} from './movie-service.service'
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import {LatestMovieComponent} from './latest-movie/latest-movie.component';
import {TopRatedMovieComponent} from './top-rated-movie/top-rated-movie.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {  HttpClientModule  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
import { SearchMovieComponent } from './search-movie/search-movie.component';
const routes: Routes = [
       { path: '', component: HomePageComponent },
       {path :'movieDetails',component:MovieDetailsComponent},
       {path :'topRated' ,component:TopRatedMovieComponent},
       {path:'latestMovie', component:LatestMovieComponent}
     ];
@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    TopRatedMovieComponent,
    LatestMovieComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     YoutubePlayerModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
