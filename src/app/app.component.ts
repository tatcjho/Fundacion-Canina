import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Quiénes Somos', url: '/folder/Outbox', icon: 'happy' },
    { title: '¿Cómo ayudar?', url: '/folder/Favorites', icon: 'information' },
    { title: 'Alianzas', url: '/folder/Archived', icon: 'heart' },
    { title: 'Contáctanos', url: '/folder/Trash', icon: 'flash' },
    { title: 'Salir', url: '/folder/Spam', icon: 'log-out' },
  ];
  public labels = ['Inicio', 'Quienes-Somos', 'Como-Ayudar', 'Alianzas', 'Contáctanos', 'Salir'];
  constructor() {}
}
