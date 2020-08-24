import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters = ["Superman", "Aquaman", "Batman", "Flash", "Wonder Woman"]

  constructor() { }

  ngOnInit() {
  }

  // Se debe implementar un método para realizar el reordenamiento de la lista
  reorder(event: any) {
    console.log(event);

    const itemToMove = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, itemToMove);

    event.detail.complete();
  }

  onClick(){
    console.log(this.characters);
  }

}
