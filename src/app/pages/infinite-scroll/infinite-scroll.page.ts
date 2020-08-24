import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll : IonInfiniteScroll  // para poder acceder a las propiedades del infinite scroll de la pantalla
  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log("cargando...");

    setTimeout(() => {

      // Para deshabilitar el infinite scroll cuando ya no tiene más elementos
      if(this.data.length >= 60){
        this.infiniteScroll.disabled = true;
        return;
      }

      const newData = Array(20);
      this.data.push(...newData);

      // Esto detiene el loading que se muestra en la página
      event.target.complete();
    }, 1000);
  }

}
