import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverSatus = 'offline';

    constructor() {
        this.serverSatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverSatus;
    }

    getColor() {
        return this.serverSatus === 'online' ? 'green' : 'red';
    }
}
