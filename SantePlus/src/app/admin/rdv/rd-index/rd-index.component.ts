import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rd-index',
  templateUrl: './rd-index.component.html',
  styleUrls: ['./rd-index.component.css']
})
export class RdIndexComponent {

  rdvList: any[] = [];
  displayedrdv: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8011/rdv/all').subscribe(
      data => {
        console.log(data);
        this.rdvList = data;
        this.displayedrdv = this.rdvList; // afficher les 5 premiers patients
      }
    );
  }




}
