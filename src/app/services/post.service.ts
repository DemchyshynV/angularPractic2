import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPostsByUserId(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.URL}?userId=${id}`);
  }
}
