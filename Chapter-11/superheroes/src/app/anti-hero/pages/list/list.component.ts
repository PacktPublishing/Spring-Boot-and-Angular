import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { TableActions } from '../../enums/table-actions.enum';
import { AntiHero } from '../../models/anti-hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // sample data of anti hero
  antiHeroes: AntiHero[] = [
    {
      id: '1',
      firstName: "Eddie",
      lastName: "Brock",
      house: "New York",
      knownAs: "Venom"
    }
  ]
  headers: {headerName: string, fieldName: keyof AntiHero}[] = [
    {headerName: "First Name", fieldName: "firstName"},
    {headerName: "Last Name", fieldName: "lastName"},
    {headerName: "House", fieldName: "house"},
    {headerName: "Known As", fieldName: "knownAs"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectAntiHero(data: {antiHero: AntiHero, action: TableActions}) {
    this.router.navigate(['anti-heroes', 'form', data.antiHero.id]);
  }

  executeCommandBarAction(action: CommandBarActions) {
    switch(action) {
      case CommandBarActions.Create: {
        this.router.navigate(["anti-heroes", "form"]);
        return;
      }
      case CommandBarActions.DeleteAll: {
        return;

      }
      default: ""

    }
  }

}
