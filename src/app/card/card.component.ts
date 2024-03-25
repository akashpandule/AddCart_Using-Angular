import { NgFor, NgIf } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: any[] = [
    {name:"Dress", price: 2000},
    {name:"Toy", price: 500},
    {name:"Shoes", price: 2500},
    {name:"Biscuit", price: 250},
    {name:"Juices", price: 150},
    {name:"Mixer", price: 5000},
  ];

  // @Input() parentMessage:string  = "";
  selectedProducts: any[] = [];

  @Output() productsAdded = new EventEmitter<any[]>();

  sendProductToParent(product: any) {
    this.selectedProducts.push(product);
    this.productsAdded.emit(this.selectedProducts);
  }

}
