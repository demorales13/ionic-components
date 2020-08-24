import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {

  // No está funcionando esta referenciación
  @ViewChild(IonSegment) segment: IonSegment;

  publisher: string;
  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.segment.value = "Todos";
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event: any) {
    if (event.detail.value == "Todos") {
      this.publisher = "";
    } else {
      this.publisher = event.detail.value;
    }
  }

}
