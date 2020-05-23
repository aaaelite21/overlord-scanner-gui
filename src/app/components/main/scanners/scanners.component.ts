import { Component, OnInit } from '@angular/core';
import { Scanner } from '../../../models/scanner';
import { ScannerService } from '../../../services/scanners.service';
import { WebsocketService } from '../../../services/websocket.service';
import { Price } from '../../../models/price';
@Component({
  selector: 'app-scanners',
  templateUrl: './scanners.component.html',
  styleUrls: ['./scanners.component.css'],
})
export class ScannersComponent implements OnInit {
  scanners: Scanner[];
  scannerList: string[];
  pairsList: string[];
  prices: Price[];
  constructor(
    private scannerService: ScannerService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.scanners = [];
    this.pairsList = [];
    this.prices = [];
    this.scannerService.getScannerList().subscribe((labels) => {
      this.scannerList = labels;
    });

    this.scannerService.getActiveScanners().subscribe((list) => {
      this.scanners = list;
    });

    this.scannerService.getPairList().subscribe((list) => {
      this.pairsList = list;
    });

    //wss code
    this.websocketService.listen('update').subscribe((data: Array<Scanner>) => {
      this.scanners = data;
    });

    this.websocketService.listen('prices').subscribe((data: Array<Price>) => {
      this.prices = data;
    });
  }

  deleteScanner = (scanner_1: Scanner) => {
    //remove from GUI
    this.scanners = this.scanners.filter((sc) => sc.id !== scanner_1.id);

    //remove from server
    this.scannerService.deleteActiveScanner(scanner_1).subscribe();
  };

  addScanner = (scanner_1: Scanner) => {
    this.scannerService.addActiveScanner(scanner_1).subscribe((scanner) => {
      this.scanners.push(scanner);
    });
  };
}
