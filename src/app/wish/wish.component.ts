import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {
  items :WishItem[]=[
    new WishItem('Buy a Farm House',false),
    new WishItem('Buy a new Car',false),
    new WishItem('Buy a solitaire',true)
];

filterFunc: any=()=>{};
}
