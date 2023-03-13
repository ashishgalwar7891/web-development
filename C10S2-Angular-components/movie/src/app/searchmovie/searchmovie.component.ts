import { Component } from '@angular/core';
import { MOVIES } from '../displaymovie/movies';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent {
  movies = MOVIES;
  searchtext: string="";
  search(){
    console.log(this.movies);
    if(this.searchtext===""){
      this.movies=MOVIES;
    }else{
      this.movies=MOVIES;
      this.movies=this.movies.filter(mov=>mov.movieTitle?.startsWith(this.searchtext.toLocaleLowerCase()));
    }
  }
  reset(){
    this.searchtext='';
    this.movies=MOVIES;
  }

}
