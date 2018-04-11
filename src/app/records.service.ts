import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


// define interface of the data
interface myData {
  obj: Array<Object>
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    // get the data from the web api thanks to httpclient proxyconfig.js (root)
    return this.http.get<myData>('api/file.php')

  }

}

/*

| Angular 4200 | --> makes an API call --> | API Server 1234 |
| Angular 4200 | --> make API call to /api/* --> webpack dev server --> | API server 1234 |

*/
