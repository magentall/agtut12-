import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})

export class DataComponent implements OnInit {

  rec = []

  constructor(private myFirstService : RecordsService) { }


// use function of records.service.ts
  ngOnInit() {
    this.myFirstService.getData().subscribe(data =>{
          console.log("we got gg", data.obj)
          this.rec = data.obj;
               }
            }
}
