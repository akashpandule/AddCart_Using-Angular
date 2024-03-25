import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AddToCard';
 

  cart: any[] = [];

  addProductsToCart(products: any[]) {
    this.cart = products;
  }
}
