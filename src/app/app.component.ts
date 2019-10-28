import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'barraProgresoComponent';
  public progressBarForm = new FormGroup({
    percent: new FormControl(''),
    skill: new FormControl(''),
    topColor: new FormControl(''),
    endColor: new FormControl(''),
    color: new FormControl(''),
    bgColor: new FormControl(''),
  });

  get percent(){
    return this.progressBarForm.controls.percent.value;
  }
  get skill(){
    return this.progressBarForm.controls.skill.value;
  }
  get topColor(){
    return this.progressBarForm.controls.topColor.value;
  }
  get endColor(){
    return this.progressBarForm.controls.endColor.value;
  }
  get color(){
    return this.progressBarForm.controls.color.value;
  }
  get bgColor(){
    return this.progressBarForm.controls.bgColor.value;
  }
  showAll(){
    console.log(this.progressBarForm.controls)
  }

}
