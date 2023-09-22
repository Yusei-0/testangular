import { Injectable, inject } from '@angular/core';
import { AdminModule } from '../admin.module';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { httpErrorFunction } from '@/utils';

@Injectable({
  providedIn: AdminModule,
})
export class ReporterService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  sendCSV(file: File) {
    const body = new FormData();
    const endpoint = 'InputLoading/uploadIntradayCsv';
    console.log('IN FILE SERVICE');

    console.log('file name: ' + file.name);
    console.log('file size: ' + file.size);
    console.log('file type: ' + file.type);
    body.append('file', file);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data'); // Especifica el tipo de contenido como multipart/form-data

    console.log(
      'Body: ' +
        JSON.stringify(body.get('file')) +
        ' ' +
        JSON.stringify(body.get('name'))
    );

    return this.http
      .post(`${this.apiUrl}/${endpoint}`, body, { headers })
      .pipe(retry(3), catchError(httpErrorFunction));
  }

  exportData(data: string, reportName: string, reportType: string) {
    const reportUrl = 'Report';

    const report = { reportName, reportType, data };

    console.log(report);

    return this.http
      .post(`${this.apiUrl}/${reportUrl}`, report)
      .pipe(retry(3), catchError(httpErrorFunction));
  }
}
