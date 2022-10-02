

import {NgModule} from  '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [
    HeroeComponent,  //dice que cosas contiene este modulo
    ListadoComponent   

    ],
    exports: [
        ListadoComponent  //lo que es visible fuera del modulo
    ],
    imports: [
        CommonModule  //sole modulos se colocan en los imports
            
    ]

})
export class HeroesModule{




}