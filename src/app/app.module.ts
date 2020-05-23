import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { ScannersComponent } from './components/main/scanners/scanners.component';
import { ScannerItemComponent } from './components/main/scanner-item/scanner-item.component';
import { AddScannerComponent } from './components/main/add-scanner/add-scanner.component';
import { PriceItemComponent } from './components/main/price-item/price-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScannersComponent,
    ScannerItemComponent,
    AddScannerComponent,
    PriceItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
