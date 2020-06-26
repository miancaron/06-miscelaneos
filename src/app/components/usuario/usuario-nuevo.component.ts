import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {

    // el "parent" permite acceder a los parámetros del padre, es decir, de UsuarioComponent
    this.router.parent.params.subscribe( parametros => {
      
      console.log( 'Ruta HIJA Usuario nuevo' );
      console.log( parametros );

    });

   }

  ngOnInit(): void {
  }

}
