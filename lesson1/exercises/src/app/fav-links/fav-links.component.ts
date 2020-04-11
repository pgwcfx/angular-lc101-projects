import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.leaguelineup.com/welcome.asp?url=stlbigballs','https://en.wikipedia.org/wiki/List_of_The_Legend_of_Zelda_media','https://www.mlb.com/cardinals','https://www.geocaching.com/guide/'];
  constructor() { }

  ngOnInit() {
  }

}
