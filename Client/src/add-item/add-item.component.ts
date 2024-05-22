import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  newItem: string = '';
  @Output() itemAdded = new EventEmitter<string>();

  addItem() {
    if (this.newItem.trim()) {
      this.itemAdded.emit(this.newItem.trim());
      this.newItem = '';
    }
  }
}