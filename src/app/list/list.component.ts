import { Component, OnInit } from '@angular/core';
import { WlistService } from '../wlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  alert=false
  collection:any=[]
  constructor(private _list:WlistService) { }

  ngOnInit(): void {
    this._list.getlist().subscribe(m=>{this.collection=m})
  }
  deletelistData(item){
    this.collection.splice(item-1,1)
    this._list.deleteData(item).subscribe(m=>{this.alert=true})
  }
  closealert(){
    this.alert=false
  }
}
