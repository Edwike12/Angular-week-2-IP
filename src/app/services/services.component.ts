import { Component, OnInit } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private username: string;
  private clientid= '84ad6a648b7d4d62c044';
  private clientsecret='543cc119ebf45719cf4d6062aacca6895e315fdd';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
