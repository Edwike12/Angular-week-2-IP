import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any[string];

  constructor(private ServicesComponent: ServicesComponent ) { 
    this.ServicesComponent.getProfileInfo().subscribe(profile=> {
      console.log(profile);
      this.profile = profile;
    });
  }

  ngOnInit(): void {
  }

}
