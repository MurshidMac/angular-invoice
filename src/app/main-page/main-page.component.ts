import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GridModel } from '../grid.model';
import { faTrash, faPlus, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  trashIcon = faTrash;
  plusIcon = faPlus;
  printerIcon = faPrint;
  total = 0;
  printPage() {
    window.print();
  }

  constructor(private toastr: ToastrService) { }

  dynamicArray: Array<GridModel> = [];
  newDynamic: any = {};
  ngOnInit(): void {
    this.newDynamic = { description: "", quatity: 0, unitprice: 0, discount: 0, amount: 0 };
    this.dynamicArray.push(this.newDynamic);
  }

  addRow(index) {
    this.newDynamic = { description: "", quatity: 0, unitprice: 0, discount: 0, amount: 0 };
    this.dynamicArray.push(this.newDynamic);
    this.toastr.success('New row added successfully', 'New Row');
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      this.toastr.error("Can't delete the row when there is only one row", 'Warning');
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      this.toastr.warning('Row deleted successfully', 'Delete row');
      return true;
    }
  }


  calculateAmounts(dynamicArrayPassed) {
    console.log("Calculate amounts")

    let arrayofValue: ItemAmountDiscount[] = [];

    dynamicArrayPassed.forEach(element => {
      let quatity = element.quatity;
      let unitPrice = element.unitprice;
      let discount = element.discount;
      let discountValue = (quatity * unitPrice) * (discount / 100);
      let totalAmount = (quatity * unitPrice);
      let discountedAmount = (quatity * unitPrice) - discountValue;
      
      let item: ItemAmountDiscount = new ItemAmountDiscount(discountedAmount);
      arrayofValue.push(item);
    });

    this.dynamicArray.forEach(ele => {
      arrayofValue.forEach(v => { ele.amount = v.getDiscountAmount() });
    });
  }

  calculateTotal(dynamicArray) {
    let array = dynamicArray;
    console.log(array);
    dynamicArray.forEach(element => {
      this.total = element.amount + this.total;
    });
  }

}

class ItemAmountDiscount {
  itemAmountWithoutDiscount: Number;
  //totalAmount: Number;
  //discountAmount: Number;
  constructor(itemAmount: Number,
    //totalAmount: Number,
    //discountAmount: Number
  ) {
    this.itemAmountWithoutDiscount = itemAmount;
    //this.totalAmount = totalAmount;
    //this.discountAmount = discountAmount;
  }
  getDiscountAmount() {
    return this.itemAmountWithoutDiscount;
  }
}