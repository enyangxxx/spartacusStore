import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  goToCart() {
    this.routingService.go( {cxRoute: 'cart'} )
  }

}
