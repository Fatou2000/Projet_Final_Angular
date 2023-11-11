import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.less']
})
export class RecommendedItemsComponent implements OnInit {
  produits: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProduits().subscribe((response: any[]) => {
      this.produits = response; // Remarquez que nous assignons le tableau de données à this.data

      this.produits = this.produits.slice(0, 12);
    });
  }

}
