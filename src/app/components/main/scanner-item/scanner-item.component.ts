import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Scanner } from '../../../models/scanner';

@Component({
  selector: 'app-scanner-item',
  templateUrl: './scanner-item.component.html',
  styleUrls: ['./scanner-item.component.css'],
})
export class ScannerItemComponent implements OnInit {
  @Input() scanner: Scanner;
  @Output() deleteScanner: EventEmitter<Scanner> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick() {
    this.deleteScanner.emit(this.scanner);
  }
}
