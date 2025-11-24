import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message ="Data-Binding-Demo";
  title = "My First App!";
  description ="this is my Angular Application!";


  //property-binding
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr407wEKxjy4LWcEAPrXudcTOyEPnbZu789g&s';
  w = 250;
  h = 250;
  altText = 'Wally Amazing'
  textColor = 'Red';
  isHighlighted = true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
}
decrement() {
    this.count--;
}
}

