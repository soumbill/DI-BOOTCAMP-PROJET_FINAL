import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s-delete',
  templateUrl: './s-delete.component.html',
  styleUrls: ['./s-delete.component.css']
})


export class SDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
