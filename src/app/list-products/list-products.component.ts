import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {any} from 'codelyzer/util/function';
import {ProduitCommandDetailsComponent} from '../produit-command-details/produit-command-details.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.less']
})
export class ListProductsComponent implements OnInit {
  produits: any[] = [];
  categorie: any ;
  categorieid = 1 ;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categorieid = +this.route.snapshot.params['id']; // Convertit l'ID en nombre
      // Chargez les produits de cette catégorie ici et affichez-les dans le template
    });
    this.apiService.getProductsByCategory(this.categorieid).subscribe((response: any[]) => {
      this.produits = response; // Remarquez que nous assignons le tableau de données à this.data
    });
    this.apiService.findCategoryByid(this.categorieid).subscribe((response: any[]) => {
      this.categorie = response; // Remarquez que nous assignons le tableau de données à this.data
    });

  }

  openProductDetails(product: any): void {
    const dialogRef = this.dialog.open(ProduitCommandDetailsComponent, {
      width: '600px',
      height: '600px',
      data: product,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue est fermée.');
    });
  }

}
