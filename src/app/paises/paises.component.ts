import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  public paises: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(res => (this.paises = res));
  }
  drop(e: CdkDragDrop<any>) {
    console.log('say ok', e);
    moveItemInArray(this.paises, e.previousIndex, e.currentIndex);
  }
}
