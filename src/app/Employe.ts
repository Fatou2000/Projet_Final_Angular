import {Magasin} from './Magasin';

export class Employe{
  id?: number;
  actif?: number;
  manager?: Employe;
  magasinId?: Magasin;
}
