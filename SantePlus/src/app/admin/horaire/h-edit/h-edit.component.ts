import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-h-edit',
  templateUrl: './h-edit.component.html',
  styleUrls: ['./h-edit.component.css']
})


export class HEditComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
