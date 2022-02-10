import { Subject } from "rxjs";
export class LibrosService {
  librosSubject = new Subject();
  private Libros = ['Libros Breyson', 'Libros Aritmetica', 'El Grafico2'];

  agregarLibro(libroNombre: string) {
    this.Libros.push(libroNombre);
    this.librosSubject.next(libroNombre);
  }
  obtenerLibros() {
    return [...this.Libros];
  }
  eliminarLibro(libroNombre: string){
    this.Libros = this.Libros.filter(x=>x !== libroNombre);
    this.librosSubject.next(libroNombre);
  }
}
