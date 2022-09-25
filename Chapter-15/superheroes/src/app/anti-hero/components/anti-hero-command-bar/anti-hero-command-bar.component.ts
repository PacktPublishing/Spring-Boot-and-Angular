import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import {Router} from "@angular/router";

@Component({
  selector: 'app-anti-hero-command-bar',
  templateUrl: './anti-hero-command-bar.component.html',
  styleUrls: ['./anti-hero-command-bar.component.scss']
})
export class AntiHeroCommandBarComponent implements OnInit {
  @Output() action = new EventEmitter<CommandBarActions>()
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  emitAction(action: CommandBarActions) {
    this.action.emit(action);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
  }
}
