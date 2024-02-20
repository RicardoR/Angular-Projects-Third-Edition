import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

export interface SavePhotoResult {
  name: string;
  lat: number;
  long: number;
}
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  async takePhoto() {
   const { latitude, longitude } = await this.getLocation();
   const cameraPhoto = await Camera.getPhoto({
     resultType: CameraResultType.DataUrl,
     source: CameraSource.Camera,
     quality: 100,
   });

    if (cameraPhoto.dataUrl) {
      await this.savePhoto(cameraPhoto.dataUrl, latitude, longitude);
    }
  }

  private async savePhoto(
    dataUrl: string,
    latitude: number,
    longitude: number
  ): Promise<{ name: string; lat: number; long: number }> {
    const name = new Date().getUTCMilliseconds().toString();
    return new Promise<SavePhotoResult>((resolve) => {
      setTimeout(() => {
        resolve({name, lat: latitude, long: longitude});
      }, 1000);
    });
  }
}
