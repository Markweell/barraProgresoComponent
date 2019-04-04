import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {
  @Input () percent: string;
  @Input () skill: string;
  @Input () topColor: string;
  @Input () endColor: string;
  @Input () color: string;
  @Input () bgColor: string;

  public topColor1: string;
  public rotate1: string;
  public bgColor3: string;
  public bgColor2: string;
  public bgColorPadre: string;

  constructor() { }

  ngOnInit() {
    const porcentaje = this.progress(this.percent);
    this.bgColorPadre = 'linear-gradient(0deg, transparent 50%, ' + this.endColor + ' 50%)';
    this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    this.topColor1 = 'linear-gradient(0deg, ' + this.topColor + ' 50%,  transparent 50%)'
    this.bgColor2 = 'linear-gradient(0deg, ' + this.bgColor + ' 50%, transparent 50%)';
    this.bgColor3 = 'linear-gradient(' + this.bgColor + ' 50%, transparent 50%) content-box';
  }
  progress(percent) {
    return percent / 100 * 180;
  }

}
