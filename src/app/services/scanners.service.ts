import { Injectable } from '@angular/core';
import { Scanner } from '../models/scanner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ScannerService {
  baseUrl: string = `http://localhost:3004`;

  constructor(private http: HttpClient) {}

  getPairList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/pairs/list`, httpOptions);
  }

  getScannerList(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.baseUrl}/scanners/list`,
      httpOptions
    );
  }

  getActiveScanners(): Observable<Scanner[]> {
    return this.http.get<Scanner[]>(`${this.baseUrl}/scanners`, httpOptions);
  }

  addActiveScanner(scannerInputs): Observable<Scanner> {
    return this.http.post<Scanner>(
      `${this.baseUrl}/scanners`,
      scannerInputs,
      httpOptions
    );
  }

  deleteActiveScanner(scannerInputs: Scanner): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/scanners/${scannerInputs.id}`,
      httpOptions
    );
  }
}
