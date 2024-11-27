import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { Server } from './model/Server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CockpitComponent, ServerElementComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  servers: Server[] = [];
  serverBlueprints: Server[] = [];

  addServer(server: Server) {
    this.servers.push(server);
  }

  addServerBlueprint(server: Server) {
    this.serverBlueprints.push(server);
  }
}
