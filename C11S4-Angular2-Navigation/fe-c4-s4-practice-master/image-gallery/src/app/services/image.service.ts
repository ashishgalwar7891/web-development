import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageRouterService } from './image-router.service';

@Injectable({
  providedIn: "root"
})
export class ImageService {

  images = [
    {
      "url":"/assets/images/image-01.gif",
      "size": "5634 KB",
      "caption":"Image-1",
      "category":"nature",
      "id": 1
    },
    { 
      "url":"/assets/images/image-02.gif",
      "size": "5634 KB",
      "caption":"Image-2",
      "category":"nature",
      "id": 2
    },
    {
      "url":"/assets/images/image-03.gif",
      "size": "5634 KB",
      "caption":"Image-3",
      "category":"nature",
      "id": 3
    },    
    {
      "url":"/assets/images/image-04.gif",
      "size": "5634 KB",
      "caption":"Image-4",
      "category":"nature",
      "id": 4
    },    
    {
      "url":"/assets/images/image-05.gif",
      "size": "5634 KB",
      "caption":"Image-5",
      "category":"nature",
      "id": 5
    },    
    {
      "url":"/assets/images/image-06.gif",
      "size": "5634 KB",
      "caption":"Image-6",
      "category":"nature",
      "id": 6
    },    
    {
      "url":"/assets/images/image-07.gif",
      "size": "5634 KB",
      "caption":"Image-7",
      "category":"nature",
      "id": 7
    },    
    {
      "url":"/assets/images/image-08.gif",
      "size": "5634 KB",
      "caption":"Image-8",
      "category":"nature",
      "id": 8
    },    
    {
      "url":"/assets/images/image-09.gif",
      "size": "5634 KB",
      "caption":"Image-9",
      "category":"nature",
      "id": 9
    },
    {
      
      "url":"/assets/images/image-10.gif",
      "size": "5634 KB",
      "caption":"Image-10",
      "category":"nature",
      "id": 10
    },    
    {
      "url":"/assets/images/image-11.gif",
      "size": "5634 KB",
      "caption":"Image-11",
      "category":"nature",
      "id": 11
    },    
    {
      "url":"/assets/images/image-12.gif",
      "size": "5634 KB",
      "caption":"Image-12",
      "category":"nature",
      "id": 12
    },
  ]
//   constructor(private activatedRoute: ActivatedRoute, 
//     private imageService: ImageService,
//     private imageRouter: ImageRouterService) { 
// }


  getImages(): Observable<Array<any>> {
    console.log(this.images);
    return new Observable(subscriber => {
      subscriber.next(this.images);
    })
  }

  getImage(imageId: number): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.images.filter(image => image.id == imageId)[0])
    })
  }

  deleteImage(imageId: number): Observable<any> {    
    this.images.splice(this.images.findIndex(image => image.id === imageId),1);
    return new Observable(subscriber => {
      subscriber.next(this.images);
    })
  }

  
}
