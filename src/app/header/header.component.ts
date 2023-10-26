import { Component, ViewEncapsulation } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  buyNow() {
    // Implement the Buy Now logic
  }
}
