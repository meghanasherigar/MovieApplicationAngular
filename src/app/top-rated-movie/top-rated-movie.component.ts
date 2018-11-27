import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.css']
})
export class TopRatedMovieComponent implements OnInit {
  topRatedMovie:any[];
  baseUrl="https:///image.tmdb.org/t/p/original/";
  constructor(private movieService:MovieServiceService,private router:Router) { }

  ngOnInit() {
 this.movieService.getTopRatedMovies().subscribe(latest=>{
  this.topRatedMovie=latest.results;
  console.log( this.topRatedMovie);

 });
 
  }
  showDetails(movie):void{
    console.log("hi");
    this.movieService.setData(movie);
    this.router.navigate(['movieDetails']);
  }

}
