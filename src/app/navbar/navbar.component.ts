import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user:any=[]

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.user=this.tokenStorageService.getUser()
    console.log(this.user.username)
  }

  logout(): void {
    this.tokenStorageService.logOut();
    this.router.navigate(["/login"])
  }

}
