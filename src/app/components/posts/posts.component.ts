import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: IPost[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
