import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.interface';
import { AuthActions } from '../../state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string = "";

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    
  }

  submit(data: User) {
    this.store.dispatch({type: AuthActions.CREATE_USER, payload: data})

  }

}
