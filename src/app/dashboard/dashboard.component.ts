import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }


  logout(): void {
    this.tokenStorageService.logOut();
    this.router.navigate(["/login"])
  }

}
