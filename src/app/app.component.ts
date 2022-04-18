import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock-app';
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
    else{
      this.router.navigate(["/login"])
    }
  }

}
