import { Component, Input } from '@angular/core';
import { Server } from './../model/Server';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {

  @Input() servers: Server[];
}
