import { Component, Input, OnInit } from '@angular/core';
import { Strengths } from 'src/app/model/user';

@Component({
  selector: 'app-chip-container',
  templateUrl: './chip-container.component.html',
  styleUrls: ['./chip-container.component.scss']
})
export class ChipContainerComponent implements OnInit {

  @Input() title: string;
  @Input() strengths: Strengths[];
  constructor() { }

  ngOnInit(): void {
  }

}
