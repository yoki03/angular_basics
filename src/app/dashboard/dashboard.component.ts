import { Component, OnInit } from '@angular/core';
import{Course} from '../course'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses!: Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
