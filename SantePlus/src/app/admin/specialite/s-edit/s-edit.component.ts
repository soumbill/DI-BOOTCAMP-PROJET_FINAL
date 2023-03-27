import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s-edit',
  templateUrl: './s-edit.component.html',
  styleUrls: ['./s-edit.component.css']
})

export class SEditComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
