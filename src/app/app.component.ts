import {Component, OnInit} from '@angular/core';
import {IProduct} from "./components/models/product";
import {ProductsService} from "./services/ProductsService";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Danekers first Angular application';
  loading = false
  products$ : Observable<IProduct[]>
  term: '';

  constructor(private productsService:ProductsService , public modalService : ModalService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false));
  }
}
