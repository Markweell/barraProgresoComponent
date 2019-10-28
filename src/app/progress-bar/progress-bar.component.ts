import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @ViewChild('circuloPadre', {static: true}) circuloPadre: ElementRef;
  @ViewChild('circuloHijo1', {static: true}) circuloHijo1: ElementRef;
  @ViewChild('circuloHijo2', {static: true}) circuloHijo2: ElementRef;
  @ViewChild('circuloHijo3', {static: true}) circuloHijo3: ElementRef;
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

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    console.log(this.circuloPadre.nativeElement.offsetWidth);
    console.log(this.circuloHijo1.nativeElement.offsetWidth);
    console.log(this.circuloHijo2.nativeElement.offsetWidth);
    console.log(this.circuloHijo3.nativeElement.offsetWidth);

    this.renderer2.setStyle(this.circuloPadre.nativeElement, 'width', this.circuloPadre.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo1.nativeElement, 'width', this.circuloHijo1.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo2.nativeElement, 'width', this.circuloHijo2.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo3.nativeElement, 'width', this.circuloHijo3.nativeElement.offsetHeight + 'px');
    const porcentaje = this.progress(this.percent);
    this.bgColorPadre = 'linear-gradient(0deg, transparent 50%, ' + this.endColor + ' 50%)';
    this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    this.topColor1 = 'linear-gradient(0deg, ' + this.topColor + ' 50%,  transparent 50%)';
    this.bgColor2 = 'linear-gradient(0deg, ' + this.bgColor + ' 50%, transparent 50%)';
    this.bgColor3 = 'linear-gradient(' + this.bgColor + ' 50%, ' + this.bgColor + ' 50%) content-box';
  }

  ngOnChanges(){
    const porcentaje = this.progress(this.percent);
    this.bgColorPadre = 'linear-gradient(0deg, transparent 50%, ' + this.endColor + ' 50%)';
    this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    this.topColor1 = 'linear-gradient(0deg, ' + this.topColor + ' 50%,  transparent 50%)';
    this.bgColor2 = 'linear-gradient(0deg, ' + this.bgColor + ' 50%, transparent 50%)';
    this.bgColor3 = 'linear-gradient(' + this.bgColor + ' 50%, ' + this.bgColor + ' 50%) content-box';

  }
  onResize(event){
    console.log('resizadoo')
    this.renderer2.setStyle(this.circuloPadre.nativeElement, 'width', this.circuloPadre.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo1.nativeElement, 'width', this.circuloHijo1.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo2.nativeElement, 'width', this.circuloHijo2.nativeElement.offsetHeight + 'px');
    this.renderer2.setStyle(this.circuloHijo3.nativeElement, 'width', this.circuloHijo3.nativeElement.offsetHeight + 'px');
  }
  progress(percent) {
    return percent / 100 * 180;
  }

}
