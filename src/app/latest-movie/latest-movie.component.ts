import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceService} from '../movie-service.service';
@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.css']
})
export class LatestMovieComponent implements OnInit {
  latestPlayingMovie:any[];
  baseUrl="https:///image.tmdb.org/t/p/original/";
  constructor(private movieService:MovieServiceService,private router:Router) { }

  ngOnInit() {
    this.movieService.getLatestPlayingMovies().subscribe(latest=>{
      this.latestPlayingMovie=latest.results;
      console.log( this.latestPlayingMovie);
  });

}
goBack(){
  this.router.navigate(['home']);
}
showDetails(movie):void{
  console.log("hi");
  this.movieService.setData(movie);
  this.router.navigate(['movieDetails']);
}



}
