import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IUser} from '../../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  eventEmitter = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.eventEmitter.emit(this.user.id);
  }
}
