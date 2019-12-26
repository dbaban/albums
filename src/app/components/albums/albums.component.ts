import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:any;
  constructor(private albumsService:PhotoService) { }

  ngOnInit() {
    this.albums=this.albumsService.getAlbums(); 
  }

}
