import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() recipeAdded= new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newValues= new Ingredient(ingName, ingAmount);
    this.recipeAdded.emit(newValues)
    console.log(newValues)
  }
  onDeleteItem(){}
  onClearItem(){}

}
