import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
   this.apiService.getMenuItems('Soup').subscribe(result => {
        this.items = result;
      }
   );
  }

}
