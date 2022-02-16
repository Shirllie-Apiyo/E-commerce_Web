import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  cartAmount: number = 0;
  isLoggedIn: boolean = false;
  showButtons: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLogged(): Boolean {
    return this.authService.isLoggedIn
  }
  Logout() {
    this.authService.doLogout()
  }
}
