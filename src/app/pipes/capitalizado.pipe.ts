import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalizado"
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean = true): string {
    value = value.toLowerCase();
    let palabras = value.split(" ");
    let frase;


    if (todas){
    palabras = palabras.map((word, idx) => `${word[0].toUpperCase()}${word.substr(1)}`);
    } else {
    palabras[0] = `${palabras[0][0].toUpperCase()}${palabras[0].substr(1)}`;
    }
  
    return palabras.join(" ");
  }
}