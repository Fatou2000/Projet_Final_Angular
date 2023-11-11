import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-trade-services',
  templateUrl: './trade-services.component.html',
  styleUrls: ['./trade-services.component.less']
})
export class TradeServicesComponent implements OnInit {

  magasins: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMagasins().subscribe((response: any[]) => {
      this.magasins = response; // Remarquez que nous assignons le tableau de données à this.data
    });

  }

}
