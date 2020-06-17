import { Directive, ElementRef, HostListener, Input } from '@angular/core';

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

  // Indicamos que el valor de la variable nuevoColor se pasará como parámetro
  @Input("appResaltado") nuevoColor: string;

  // HostListener: para escuchar lo que pasa en el elemento (etiqueta) en el que hemos puesto la directiva
  // mouseenter es el evento que se estará escuchando (pasar el ratón por encima del elemento)
  // mouseEntro es un alias que le ponemos
  @HostListener('mouseenter') mouseEntro(){
    
    // si this.nuevoColor está vacío, entonces ponemos 'yellow'
    this.resaltar( this.nuevoColor || 'yellow' );

  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null );
  }

  private resaltar( color: string ){

    // Poner el fondo del elemento en color "color"
    this.el.nativeElement.style.backgroundColor = color;

  }
}
