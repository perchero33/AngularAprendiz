import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

 /* constructor() {
    console.log('constructor');

   }

  ngOnInit(): void {

    console.log('ngOnInit');
  }
  */

  heroes: string[]= ['Spiderman','Iroman','Popeye','Cantinflas','Mascara'];
  heroeBorrado: string= '';

  borrarHeroe()
  {
      
      //this.heroes.shift();
      this.heroeBorrado= this.heroes.shift() || '';
      console.log('Borrando..');

     

      
      

  }



}


