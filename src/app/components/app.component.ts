import {Component} from '@angular/core';
import {PostService} from '../services';
import {IPost} from '../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: IPost[];

  constructor(private postService: PostService) {
  }

  getId(id: number): void {
    this.postService.getPostsByUserId(id).subscribe(value => this.posts = value);
  }
}
