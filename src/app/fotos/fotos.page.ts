import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  imageSource:any;
  imageSource2:any;

  constructor(private domSanitizer:DomSanitizer) {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera,
      saveToGallery:true
    });

    

    this.imageSource=image.dataUrl;

  }


  takePicture2 = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Photos,
      saveToGallery:true
    });

    //this.imageSource='data:image/base64,'+ image.base64String;

    //console.log(this.imageSource)

    this.imageSource2=image.dataUrl;

  }

  ngOnInit() {
  }

}
