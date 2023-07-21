import { Component } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent {
  closeButton(){
    const notificationElement = document.querySelector('.notification');
    notificationElement?.classList.add('hidden');
  }
}
