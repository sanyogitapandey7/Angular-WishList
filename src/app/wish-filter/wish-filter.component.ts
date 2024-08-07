import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters=[
  (item:WishItem) =>item,
  (item:WishItem)=>item.isComplete,
  (item:WishItem)=>!item.isComplete
]

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() filter:any;
  @Output() filterChange=new EventEmitter<any>();
  
  ngOnInit(): void {
    this.updateFilter('0');
  }
 
  filterWishes:any='0';

  updateFilter(filterInput:any){
    this.filter=filters[filterInput]
    this.filterChange.emit(this.filter);
  }
}
