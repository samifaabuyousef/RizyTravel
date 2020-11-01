import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../_model/Video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  baseUrl = 'http://localhost:5000/api/videos/';

constructor(private http: HttpClient) { }

addVideo(video: Video) {
  return this.http.post(this.baseUrl + 'addvideo', video);
}

getVideos(): Observable<Video[]> {
  return this.http.get<Video[]>(this.baseUrl);
}

getVideo(id): Observable<Video> {
  return this.http.get<Video>(this.baseUrl + id);
}

deleteVideo(id: number) {
  return this.http.delete(this.baseUrl + id);
}

updateVideo(id: number , model: any) {
  return this.http.put(this.baseUrl + id , model);
}

}
