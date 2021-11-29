import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import  {map} from 'rxjs/operators/';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private username: string;
  private clientid= '84ad6a648b7d4d62c044';
  private clientsecret='543cc119ebf45719cf4d6062aacca6895e315fdd';

  constructor(private http:HttpClient) {
    console.log("services is now ready");
    this.username = 'Edwike12';
   
   }

   getProfileInfo (){
     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ this.clientid +"&client_secret=" +this.clientsecret)
     .pipe(
     map((res:Response)=> { return res.json()}));
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ this.clientid +"&client_secret=" +this.clientsecret)
    .pipe(
    map((res:Response)=> { return res.json()}));
   }

  ngOnInit(): void {
  }

}
