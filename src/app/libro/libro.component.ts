import {Component,Input,EventEmitter, Output} from "@angular/core";
import { LibrosService } from "../services/libros.service";
@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css']
})


export class LibroComponent {
  @Input() tituloLibros!:string
  @Output() libroClicKed = new EventEmitter();
  constructor(private librosService: LibrosService){

  }
  onClicked(libro:any){
    // this.libroClicKed.emit(libro);
    // console.log(libro)
    this.librosService.eliminarLibro(this.tituloLibros);
  }
}
