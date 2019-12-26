import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
 photos;
 albumId
  constructor(private route: ActivatedRoute,private albumsService:PhotoService) { }

  ngOnInit() {
    this.albumId=this.route.snapshot.params.albumId;
    this.photos=this.albumsService.getPhotos(this.albumId);
  }

}
