import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/ProductsService";
import {products} from "../../data/products";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
    form  = new FormGroup({
      title: new FormControl<string>('' , [
        Validators.required,
        Validators.minLength(8)
      ])
    })

  constructor( private productService:ProductsService ,
               private modalService:ModalService
               ) {

  }


  get title(){
      return this.form.controls.title as FormControl
  }

  submit() {
   this.productService.create({
     title: this.form.value.title as string,
     price: 13.5,
     description: 'lorem ipsum set',
     image: 'https://i.pravatar.cc',
     category: 'electronic',
     rating:{
       rate: 44,
       count:14
     }
   }).subscribe(() =>{
     this.modalService.close();
   });
  }
}
