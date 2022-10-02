
import{ Component } from '@angular/core';   

@Component({

selector: 'app-contador',
template: `
<h1>{{title}}</h1>

<h3> la base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(base)"> +5 </button>

<span>{{numero}}</span>

<button (click)="acumular(-base)"> -5 </button>

`

})

export class ContadorComponent{

    title:string = 'Contador App';
  numero: number= 10;
  base:number=5;

/*sumar(){

  this.numero+= 1;
}

restar(){

  this.numero-= 1;
}*/

acumular(valor: number){

  this.numero += valor;

}


}