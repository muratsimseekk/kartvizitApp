import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent {

  cardForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private cardService:CardService,
    private _snackBar:MatSnackBar,
    public dialog:DialogRef
  ) {

    this.cardForm = this.fb.group({
      name:["",Validators.maxLength(50)],
      title:["" , [Validators.required , Validators.maxLength(255)]],
      phone:["",[Validators.required , Validators.maxLength(20)]],
      email:["",[Validators.email,Validators.maxLength(55)]],
      address:["",Validators.maxLength(255)]
    })
  }

  addCard(){
    this.cardService.addCard(this.cardForm.value)
      .subscribe(res=>{

         this._snackBar.open(<string>res || "Kartvizit olusturuldu. " , "" , {
           duration:4000
         })
        console.log(res)
        this.dialog.close();
      })
  }
}


