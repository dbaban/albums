import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/albums');
  }
  getPhotos(albumId:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?=albumId=${albumId}`);
  }
}
