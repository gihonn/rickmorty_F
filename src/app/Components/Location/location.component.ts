import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  standalone: true,
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() location: any;

  constructor() {}

  ngOnInit(): void {}
}
