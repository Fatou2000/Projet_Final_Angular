import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.less']
})
export class MenuCategoryComponent implements OnInit {
  categories: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((response: any[]) => {
      this.categories = response; // Remarquez que nous assignons le tableau de données à this.data
    });
  }

}
