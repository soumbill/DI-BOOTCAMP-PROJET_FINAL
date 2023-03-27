import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-m-edit',
  templateUrl: './m-edit.component.html',
  styleUrls: ['./m-edit.component.css']
})


export class MEditComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
