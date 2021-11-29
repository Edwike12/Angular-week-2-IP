import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any[string];
  repos:any[string];
  username:string;

  constructor(private ServicesComponent: ServicesComponent ) { 
   
  }

  findProfile(){
    this.ServicesComponent.updateProfile(this.username);
    this.ServicesComponent.getProfileInfo().subscribe(profile=> {
      console.log(profile);
      this.profile = profile;
    });

      this.ServicesComponent.getProfileRepos().subscribe(repos=>{
        console.log(repos);
        this.repos =repos;
      });
  }

  ngOnInit(): void {
  }

}
