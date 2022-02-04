import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todayJalali: any;
  ngOnInit(): void {

    this.todayJalali = moment("2/3/2022").locale('fa').format('YYYY/M/D');
  }
  title = 'jalali';
}