import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {

  patientList: any[] = [];
  displayedPatients: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8011/patient/all').subscribe(
      data => {
        console.log(data);
        this.patientList = data;
        this.displayedPatients = this.patientList; // afficher les 5 premiers patients
      }
    );
  }



}

