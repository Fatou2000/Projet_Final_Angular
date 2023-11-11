import {Client} from './Client';
import {Magasin} from './Magasin';
import {Employe} from './Employe';

export class Commande{
  numero?: number;
  dateCommande?: Date;
  dateLivraison?: Date;
  dateLivraisonVoulue?: Date;
  statut?: number;
  clientId?: Client;
  magasinId?: Magasin;
  vendeurId?: Employe;
}
