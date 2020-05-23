import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-scanner',
  templateUrl: './add-scanner.component.html',
  styleUrls: ['./add-scanner.component.css'],
})
export class AddScannerComponent implements OnInit {
  @Input() labels: string[];
  @Input() pairs: string[];

  @Output() addScanner: EventEmitter<any> = new EventEmitter();

  name: string;
  pair: string;
  constructor() {
    console.log(this.pairs);
  }

  ngOnInit(): void {}

  onSubmit() {
    const scan = {
      name: this.name,
      completed: false,
      pair: this.pair,
    };

    this.addScanner.emit(scan);
  }
}
