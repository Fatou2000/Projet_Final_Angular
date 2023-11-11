import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ProduitCommandDetailsComponent} from '../produit-command-details/produit-command-details.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  categories: any[];
  marques: any[];
  products: any[];

  selectedCategory: bigint;
  selectedBrand: bigint;
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((response: any[]) => {
      this.categories = response; // Remarquez que nous assignons le tableau de données à this.data
    });
    this.apiService.getMarques().subscribe((response: any[]) => {
      this.marques = response; // Remarquez que nous assignons le tableau de données à this.data
    });
  }
  // tslint:disable-next-line:typedef
  getProducts() {
    this.apiService.getProductsByCategoryAndBrand(this.selectedCategory, this.selectedBrand)
      .subscribe((response: any[]) => {
        this.products = response; // Remarquez que nous assignons le tableau de données à this.data
      });
  }
  openProductDetails(product: any): void {
    const dialogRef = this.dialog.open(ProduitCommandDetailsComponent, {
      width: '400px',
      height: '400px',
      data: product,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue est fermée.');
    });
  }

}
