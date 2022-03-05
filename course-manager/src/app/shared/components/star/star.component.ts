import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number;

  starWidth: number;

  constructor() {
    this.rating = 0;
    this.starWidth = 0;
  }

  ngOnChanges(): void {
    this.starWidth = (this.rating * 74) / 5;
  }
}
