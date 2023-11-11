import { Component, OnInit } from '@angular/core';

import {
  faCcMastercard, faCcPaypal, faCcVisa,
  faFacebook, faInstagram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
