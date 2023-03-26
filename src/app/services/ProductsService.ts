import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";
import {IProduct} from "../components/models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn : 'root'
})
export  class ProductsService{
  constructor(
    private errorService: ErrorService,
    private http: HttpClient
  ) {
  }

  getAll() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products' , {
      params : new HttpParams({
        fromObject: {limit : 20}
      })
    }).
    pipe(
      delay(200),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error : HttpErrorResponse){
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

}
