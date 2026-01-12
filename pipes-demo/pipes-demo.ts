import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
  PercentPipe,
  TitleCasePipe,
  JsonPipe
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    JsonPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  name = 'Adrian Joriz G. Pintero';
  courseTitle = 'angular pipes demo example';

  price = 20000;
  discountRate = 0.25;

  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];

  decimalNum1 = 8.7589623;
  decimalNum2 = 5.43;

  student = {
    id: 101,
    name: 'Adrian Joriz G. Pintero',
    course: 'Angular',
    active: true
  };
}
