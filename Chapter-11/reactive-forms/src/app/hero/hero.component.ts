import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { checkHasNumberValidator } from '../validators/custom.validators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
   powerFormArray: FormArray;
    heroForm = this.fb.group({ 
       firstName: ['', [Validators.required, checkHasNumberValidator]], 
        lastName: ['', [Validators.required]],
        knownAs: [''],
        address:  this.fb.group({
           street: [''],
           city: [''],
           country: [''],
       }),
         powers: this.fb.array([])
   }); 
   
   constructor(private fb: FormBuilder) {
    this.powerFormArray = this.heroForm.get("powers") as FormArray;
   }
  
  ngOnInit(): void {
  }

  addPower() {
    (this.heroForm.get("powers") as FormArray).push(new FormControl());
  }
  deletePower(i: number) {
    (this.heroForm.get("powers") as FormArray).removeAt(i);
  }

  // getters
  get firstName()  {
     return this.heroForm.get('firstName')
  }

  onSubmit() {
    console.log(this.heroForm.value);
  }

  

}
