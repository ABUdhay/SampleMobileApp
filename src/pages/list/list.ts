import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  chats: string[];
  items: Array<{title: string, icon: string}>;
  itemsDuplicate:string;

  updateList(evt:any, query: string){
    if(query.length){
      this.items = JSON.parse(this.itemsDuplicate).filter(
        (itm)=>{return itm.title.toLowerCase().indexOf(query.toLowerCase())>-1;}
      );
    }else{
      this.items = JSON.parse(this.itemsDuplicate);
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.chats=['Coffee', 'Tea', 'Lime Soda', 'Potato Chips', 'Spinach Fry']
    this.items = [];
    for(let i = 0; i < 5; i++) {
      this.items.push({
        title: this.chats[i],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.itemsDuplicate = JSON.stringify(this.items);
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
