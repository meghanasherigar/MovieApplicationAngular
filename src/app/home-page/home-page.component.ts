import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  moviesData:any[];
  filmyData:any[];
  constructor(private movieService:MovieServiceService,private router:Router) { }
  baseUrl="https:///image.tmdb.org/t/p/original/";
 imageUrl:String;
  thehours:any;
  themessage:String;
  morning:String;
  afternoon:String;
  evening:String;



  getMovieContents(movieName):void{

    this.movieService.getMovieDetails(movieName).subscribe(moviesData=>{
    this.filmyData=moviesData.results;
    console.log(this.filmyData);
      this.imageUrl=this.filmyData[0].poster_path;
    })  
  }
  showDetails(movie):void{
    console.log("hi");
    this.movieService.setData(movie);
    this.router.navigate(['movieDetails']);
  }
  showTopRatedMovies():void{

    this.router.navigate(['topRated']);
  }
  showLatestMovies():void{
    this.router.navigate(['latestMovie']);
    
  }
  ngOnInit() {
   
 this.getMovieContents("kabhi khushi kabhi gham");
 this.thehours = new Date().getHours();
  
  this.morning = 'Good morning';
  this.afternoon = 'Good afternoon';
  this.evening = 'Good evening';
 
 if (this.thehours >= 0 && this.thehours < 12) {
   this.themessage =this.morning; 
 
 } else if (this.thehours >= 12 && this.thehours < 17) {
   this.themessage = this.afternoon;
 
 } else if (this.thehours >= 17 && this.thehours < 24) {
   this.themessage = this.evening;
 }
  }
  
}
