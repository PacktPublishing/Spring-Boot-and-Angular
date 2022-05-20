import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
