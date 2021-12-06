import {Component,Input,EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css']
})


export class LibroComponent {
  @Input() tituloLibros!:string
  @Output() libroClicKed = new EventEmitter();
  onClicked(libro:any){
    this.libroClicKed.emit(libro);
    console.log(libro)
  }
}
