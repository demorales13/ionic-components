import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums : any[] = [];
  searchText: string;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  onSearchChange(event: any){

    this.searchText = event.detail.value;

    console.log(this.searchText);
  }

}
