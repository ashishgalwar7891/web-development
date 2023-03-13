import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  serachtextintermidiate:EventEmitter<string>=new EventEmitter<string>()

  outputstreamtext(str:string){
    this.serachtextintermidiate.emit(str)
  }


}
