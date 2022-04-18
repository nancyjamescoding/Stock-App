import { Component, OnInit } from '@angular/core';
import { OrderRequestService } from '../_services/order-request.service';
import {Order} from '../order'
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.css']
})
export class OrderRequestComponent implements OnInit {
  orders : Order [] = []

  constructor(private orderRequestService: OrderRequestService) { }

  ngOnInit(): void {
    this.orderRequestService.getOrderRequests().subscribe(
      data => {
        data.forEach((order: any, index: number) => {
          this.orders.push(new Order(order.item_name, order.s_name, order.s_email, order.status, order.quantity))
        });
      },
      err => {
        this.orders = []
      }
    );
  }
  async onApprove(itemName: string){
    await this.orderRequestService.approveOderRequests(itemName).subscribe(
      data => {
      console.log(data);
      window.location.reload();
      }
    )
    
  }
  async onDecline(itemName: string){
    await this.orderRequestService.declineOderRequests(itemName).subscribe(
      data => {
      console.log(data);
      window.location.reload();
      }
    )
    
  }
}
