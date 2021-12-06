import { Component } from '@angular/core';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['Matematica', 'Algoritmos Basicos', 'Algebra Nivel Basico'];
  
  eliminarLibro(libro:any){
    this.libros = this.libros.filter(p=>p !== libro);
  }

}
