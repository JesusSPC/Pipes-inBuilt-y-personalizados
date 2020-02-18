import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Oscar";
  nombre2:string = "osCar sANTos PeREz";
  numeros:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  PI:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 12345;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19",
    }
  }

  valorDePromesa = new Promise((res, rej) => {
    setTimeout(() => {
      res('Llegaron los datos!')
    }, 3500)
  })

  fecha = new Date();

  video = "ndMKTnSRsKM";
}
