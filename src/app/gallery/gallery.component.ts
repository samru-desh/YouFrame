import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { HttpClient } from '@angular/common/http';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images:any[];
  filterBy?: string = 'all'
  visibleImages:any[] = [];
  selectedFile: ImageSnippet;
  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
