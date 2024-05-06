import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardModalComponent} from "./card-modal/card-modal.component";
import {CardService} from "../services/card.service";
import {Card} from "../models/card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  cards!:Card[];

  constructor(
    private cardService:CardService,
    public dialog:MatDialog) {

    this.getCards();
  }

  openAddCard(){
    //dialog menusu acildiktan sonra kapandiginda Kartvizitleri guncellemesi icin yazilmis kod .
    const dialog = this.dialog.open(CardModalComponent);
    dialog.afterClosed().subscribe(res=> {
      if (res){
        this.getCards();
      }
    })
  }

  getCards(){
    this.cardService.getCards()
      .subscribe(res =>{
        this.cards=res;
        console.log(this.cards);
      })
  }
}
