import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from './Client';
import {Commande} from './Commande';
import {ArticleCommande} from './ArticleCommande';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/ProjetFinalJEE-1.0-SNAPSHOT/api/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl + 'categories');
  }
  getProduits(): Observable<any>{
    return this.http.get(this.apiUrl + 'produits');
  }

  getProductsByCategory(categorieId: number): Observable<any> {
    const url = `${this.apiUrl}produits/categorie/${categorieId}`;
    return this.http.get(url);
  }

  findCategoryByid(id: number): Observable<any>{
    const url = `${this.apiUrl}categories/${id}`;
    return this.http.get(url);
  }
  getProductById(productId: number): Observable<any>{
    const url = `${this.apiUrl}produits/${productId}`;
    return this.http.get(url);
  }
  getMagasins(): Observable<any>{
    return this.http.get(this.apiUrl + 'magasins');
  }

  getMarques(): Observable<any>{
    return this.http.get(this.apiUrl + 'marques');
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl + 'articles');
  }
  getProductsByCategoryAndBrand(category: bigint, brand: bigint): Observable<any> {
    return this.http.get(`${this.apiUrl}produits/byCategoryAndBrand?category=${category}&brand=${brand}`);
  }
  createClient(client: Client): Observable<any> {
    return this.http.put(this.apiUrl + 'clients', client);
  }

  createCommande(commande: Commande): Observable<any> {
    return this.http.put(this.apiUrl + 'commandes', commande);
  }
  createArticle(article: ArticleCommande): Observable<any> {
    return this.http.put(this.apiUrl + 'articles', article);
  }
  getNewClientId(): Observable<any> {
    return this.http.get(this.apiUrl + 'clients/lastId');
  }

  getNewArticleId(): Observable<any> {
    return this.http.get(this.apiUrl + 'articles/lastId');
  }
}
