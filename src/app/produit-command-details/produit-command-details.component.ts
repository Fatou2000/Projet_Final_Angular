import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-command-details',
  templateUrl: './produit-command-details.component.html',
  styleUrls: ['./produit-command-details.component.less']
})
export class ProduitCommandDetailsComponent implements OnInit {

  product: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<ProduitCommandDetailsComponent>) {
    this.product = data.product;
  }
  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  redirectToCommandePage(productId: number): void {
    this.dialogRef.afterClosed().subscribe(result => {
      if (result === 'closed') {
        // La fenêtre de dialogue est fermée, maintenant nous pouvons naviguer
        this.router.navigate(['/commande', productId]);
      }
    });
    this.dialogRef.close('closed');
  }



}
