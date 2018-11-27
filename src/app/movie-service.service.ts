import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieServiceService {
  private data: string;
  apiKey = "f2fdcce82c4ec44ee9a092b265f656ff";
  constructor(private  http:HttpClient) { }
  public getMovieDetails(movieName):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&query="+movieName);
    
  }
  public getMovieTrailer(id):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+this.apiKey);
  
  }

  public getCastDetails(id):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+this.apiKey);
   
  }
  public getTopRatedMovies():Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+this.apiKey);
  }
  public getLatestPlayingMovies():Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+this.apiKey);
  }

  public setData(value){
    this.data=value;
  }
  public getData(){
    return this.data;
  }




}
