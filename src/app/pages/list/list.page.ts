import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;
  @ViewChild("list") list : IonList;

  constructor(private dataService: DataService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast( message:string, ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user: any) {
    this.presentToast("favorite");
    // Para cerrar los slide abiertos
    this.list.closeSlidingItems();
  }

  share(user: any) {
    this.presentToast("share");
    this.list.closeSlidingItems();
  }

  remove(user: any) {
    this.presentToast("remove");
    this.list.closeSlidingItems();
  }

}
