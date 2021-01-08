import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  PRICE = [
    {
      pounds: '1 lb',
      price: '$15',
      shipping: '$9',
      total: '$24',
    },
    {
      pounds: '2 lb',
      price: '$30',
      shipping: '$18',
      total: '$48',
    },
    {
      pounds: '3 lb',
      price: '$45',
      shipping: '$18',
      total: '$63',
    },
    {
      pounds: '4 lb',
      price: '$60',
      shipping: '$18',
      total: '$78',
    },
    {
      pounds: '5 lb',
      price: '$75',
      shipping: '$22',
      total: '$97',
    },
    {
      pounds: '6 lb',
      price: '$90',
      shipping: '$22',
      total: '$112',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
