import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-popular-category',
  templateUrl: './popular-category.component.html',
  styleUrls: ['./popular-category.component.less']
})
export class PopularCategoryComponent implements OnInit {
  marques: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMarques().subscribe((response: any[]) => {
      this.marques = response; // Remarquez que nous assignons le tableau de données à this.data
    });
  }

}
