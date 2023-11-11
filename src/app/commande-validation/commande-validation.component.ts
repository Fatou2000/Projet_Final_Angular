import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Client} from '../Client';
import {ArticleCommande} from '../ArticleCommande';
import {Commande} from '../Commande';
import {MatDialog} from '@angular/material/dialog';
import {MessageComponent} from '../message/message.component';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-commande-validation',
  templateUrl: './commande-validation.component.html',
  styleUrls: ['./commande-validation.component.less']
})
export class CommandeValidationComponent implements OnInit {

  productId: number;
  product: any;
  articles: any = [];
  client: Client = {
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    email: '',
    ville: '',
    etat: ''
  };
  commande: Commande = {
    clientId: this.client,
    statut: null,
    dateCommande: null,
    dateLivraisonVoulue: null,

  };
  article: ArticleCommande = {
    ligne: null,
    quantite: 1,
    remisedecimal: null,
    numerocommande: this.commande
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +this.route.snapshot.params['productId'];
    });
    this.apiService.getProductById(this.productId).subscribe((response: any[]) => {
      this.product = response;
    });
    this.apiService.getArticles().subscribe((response: any[]) => {
      this.articles = response;
    });
  }
  // @ts-ignore
  createCommande() {
    this.apiService.getNewClientId().subscribe((response: number) => {
      this.client.id = response;
      console.log(this.client);
    });
    this.apiService.getNewArticleId().subscribe((response: number) => {
      this.article.id = response;
    });
    this.apiService.createClient(this.client).subscribe((response: object) => {
        this.client = response;
      }
    );
    this.apiService.createCommande(this.commande).subscribe((response: object) => {
        this.commande = response;
      }
    );
    this.apiService.createArticle(this.article).subscribe((response: object) => {
        this.article = response;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.createCommande();
    this.openConfirmationDialog();
  }


  openConfirmationDialog() {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue de confirmation est fermée.');
      this.router.navigate(['/welcome']);
    });
  }
  navigateToWelcome(): void {
    this.router.navigate(['/welcome']);
  }

}
