import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuItems : Observable<MenuItem[]>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getMenuOptions();
    console.log(this.menuItems);
  }

}
