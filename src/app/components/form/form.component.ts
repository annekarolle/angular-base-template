import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  template: `
<section [ngStyle]="{ 'background-color': color }">
    <label> Favorite Color</label>
    <div>
        <input type="text" [formControl]="favoriteColorControl">
        <button (click)="submit()">GO!</button>
    </div>



</section>

  `

  ,
  styleUrl: './form.component.css'
})
export class FormComponent {
  favoriteColorControl = new FormControl('');
  color: string = "";
  submit(){
    if(this.favoriteColorControl.value){
      this.color = this.favoriteColorControl.value
    }
    else {
      this.color = 'black'
    }


  }
}
