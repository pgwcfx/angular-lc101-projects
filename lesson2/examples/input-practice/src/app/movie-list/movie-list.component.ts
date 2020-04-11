import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
   export class MovieListComponent implements OnInit {
      listHeading: string = "Oscar Winners to Watch";
      movies: string[] = ['Titanic', 'Gladiator', 'Mutiny on the Bounty', 'The Silence of the Lambs'];
   
      constructor() { }
   
      ngOnInit() { }
   
   }

   addMovie (newTitle: string) {
      if(!this.movies.includes(newTitle)){
         this.movies.push(newTitle);
      }
   }