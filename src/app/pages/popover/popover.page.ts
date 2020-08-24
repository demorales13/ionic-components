import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})

export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showPop(event: any) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: event,
      mode: "ios",  // obliga que en android se use el estilo de ios
      backdropDismiss: false,  // para evitar que se cierre sin alguna intereccion
    });

    await popover.present();

    // Espera a que la ventana se cierre para ejecutar la acción
    //const { data } = await popover.onDidDismiss();

    // Se ejecuta la acción en el mismo momento en que se ejecuta el cierre del popover
    const { data } = await popover.onWillDismiss();
    
    console.log("Popover response =>", data);
  }

}
