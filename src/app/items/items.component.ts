import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  authToken: any
  item = {
    name: '',
    received: '',
    in_stock: '',
    spoiled: '',
    buying_price: 0,
    selling_price: 0
  }
  isItemAdded = false
  public buyingPrice: any = []

  constructor(private itemsService: ItemsServiceService) { }
  onAdd() {} 

  onAdditem() {const {name, received, in_stock, spoiled, buying_price, selling_price } = this.item;
    this.itemsService.postItem(name, received, in_stock, spoiled, buying_price, selling_price).subscribe(data => {
      this.buyingPrice.push(buying_price)
      console.log(data)
      console.log(this.buyingPrice + 'Eric')
      // window.location.reload();
    })
  }

  ngOnInit(): void {
    console.log(this.buyingPrice + 'Eric')
  }
}