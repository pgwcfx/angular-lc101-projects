import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Related photos/images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.gannett-cdn.com/-mm-/02e51796a039282bac9fbdec5272667d40e03301/c=259-0-1691-1077/local/-/media/2018/01/04/Rochester/Rochester/636506859629920639-Heroes-see-the-truth-of-the-map.jpg?width=540&height=405&fit=crop';
  image3 = 'https://m.media-amazon.com/images/M/MV5BYjkzZDhmYzUtYWJiMy00M2YyLTlmODItZThkZjZjZTY3ZDBhXkEyXkFqcGdeQXVyMTk3MzE4MjU@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}