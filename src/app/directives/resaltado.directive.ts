import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // ElementRef: para acceder a las propiedades del elemento (etiqueta) en el que hemos puesto la directiva
  constructor( private el: ElementRef ) { 
    console.log("Directiva llamada");
    // Poner el fondo del elemento en amarillo
    // el.nativeElement.style.backgroundColor="yellow";
  }

  // HostListener: para escuchar lo que pasa en el elemento (etiqueta) en el que hemos puesto la directiva
  // mouseenter es el evento que se estará escuchando (pasar el ratón por encima del elemento)
  // mouseEntro es un alias que le ponemos
  @HostListener('mouseenter') mouseEntro(){
    // Poner el fondo del elemento en amarillo
    this.el.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = null;
  }
}
