import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p-delete',
  templateUrl: './p-delete.component.html',
  styleUrls: ['./p-delete.component.css']
})


export class PDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
