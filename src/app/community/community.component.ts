import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { WlistService } from '../wlist.service';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  addComment=new FormGroup({
    comment:new FormControl('')
  })
  collection:any=[]
  constructor(private _comm:WlistService) { }

  ngOnInit(): void {
    this._comm.getComment().subscribe(m=>{this.collection=m})
  }
  commentData(){
    //console.warn(this.addComment.value)
    this._comm.commentUsr(this.addComment.value).subscribe(m=>{console.log(m)})
    location.reload()
  }

}
