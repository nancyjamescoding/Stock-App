import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  authToken: any
  item = {
    item_name: '',
    s_name: '',
    s_email: '',
    status: '',
    quantity: ''
  }
  isItemRequested = false
  
  constructor(private itemsService: ItemsServiceService) { }
  onRequest() {}
  onRequestitem() {
    const { item_name, s_name, s_email, quantity } = this.item;
    this.itemsService.requestItem(item_name, s_name, s_email, quantity).subscribe(data => {
      console.log(data)
    })
  }
  ngOnInit(): void {
  }


}