import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../../models/price';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.css'],
})
export class PriceItemComponent implements OnInit {
  @Input() price: Price;

  constructor() {}

  ngOnInit(): void {}
}
