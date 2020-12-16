import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Pics';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/buddy-the-elf-outdoor-stand-up~13808695';
  image3 = 'https://www.theribboninmyjournal.com/wp-content/uploads/2018/12/sisters-758x569.jpg';

  constructor() { }

  ngOnInit() {
  }

}
