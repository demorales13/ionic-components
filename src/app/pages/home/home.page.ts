import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuItem } from '../../interfaces/menuItem';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuItems: Observable<MenuItem[]>;

  constructor(private menuController: MenuController,
              private dataService : DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}
