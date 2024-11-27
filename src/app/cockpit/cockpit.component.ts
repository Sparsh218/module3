import { Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Server } from "./../model/Server";

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() onAddServerEvent = new EventEmitter<Server>();
  @Output() onAddServerBlueprintEvent = new EventEmitter<Server>();
  @ViewChild('serverContent') content : ElementRef;

  onAddServer(name: HTMLInputElement, content : HTMLInputElement) {
    var obj = new Server(name.value, content.value);
    this.onAddServerEvent.emit(obj);
    name.value = '';
    content.value = '';
  }

  onAddServerBlueprint(name: HTMLInputElement) {
    this.onAddServerBlueprintEvent.emit(new Server(name.value, this.content.nativeElement.value));
    name.value = '';
    this.content.nativeElement.value = '';
  }
}
