import {Categorie} from './Categorie';
import {Marque} from './Marque';

export class Product{
  id?: number;
  nom?: string | null;
  anneeModel?: number | null;
  prixDepart?: number | null;
  categorieId?: Categorie | null;
  marqueId?: Marque | null;


}
