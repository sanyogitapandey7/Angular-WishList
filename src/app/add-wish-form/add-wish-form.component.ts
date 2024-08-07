import { Component,Output,EventEmitter} from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})

export class AddWishFormComponent {
@Output() addWish=new EventEmitter<WishItem>();
newWish:string='';

addtoWishList(){
 this.addWish.emit(new WishItem(this.newWish,false));
 
}

}
