import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../movie-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movieObjet:any;
  trailerKey:any='';
  castDetails:any[];
  baseUrl="https:///image.tmdb.org/t/p/original/";
   
  constructor(private movieService:MovieServiceService) { }

  ngOnInit() {
   this.movieObjet= this.movieService.getData();
   this.movieService.getMovieTrailer(this.movieObjet.id).subscribe(trailer=>{
    this.trailerKey=trailer.results[0].key;
    console.log('trailer key' + this.trailerKey);
   });
   this.movieService.getCastDetails(this.movieObjet.id).subscribe(movieCast=>{
    this.castDetails=movieCast.cast;
    });
  }

    private player;
    private ytEvent;
    
    onStateChange(event) {
      this.ytEvent = event.data;
    }
    savePlayer(player) {
      this.player = player;
    }
    
    playVideo() {
      this.player.playVideo();
    }
    
    pauseVideo() {
      this.player.pauseVideo();
    }



}
