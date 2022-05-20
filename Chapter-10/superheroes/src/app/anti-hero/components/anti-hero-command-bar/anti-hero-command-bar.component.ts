import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';

@Component({
  selector: 'app-anti-hero-command-bar',
  templateUrl: './anti-hero-command-bar.component.html',
  styleUrls: ['./anti-hero-command-bar.component.scss']
})
export class AntiHeroCommandBarComponent implements OnInit {
  @Output() action = new EventEmitter<CommandBarActions>()
  constructor() { }

  ngOnInit(): void {
  }

  emitAction(action: CommandBarActions) {
    this.action.emit(action);
  }

}
