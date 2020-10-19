import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WlistService } from '../wlist.service';
@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
 alert:boolean=false
  constructor(private rout:ActivatedRoute,private _data:WlistService) { }
  updateDetail=new FormGroup({
    date:new FormControl('',Validators.required),
    weight:new FormControl('',Validators.required),
    bodyfat:new FormControl('',Validators.required)
  })
  get weight(){return this.updateDetail.get('weight')}
  get bodyfat(){return this.updateDetail.get('bodyfat')}
  ngOnInit(): void {
    this._data.updateDetail(this.rout.snapshot.params.id).subscribe(res=>{
      this.updateDetail=new FormGroup({
        date:new FormControl(res['date']),
        weight:new FormControl(res['weight']),
        bodyfat:new FormControl(res['bodyfat'])
      })
    })
  }
  editCollection(){
    console.warn("item",this.updateDetail.value)
    this._data.editDetail(this.rout.snapshot.params.id,this.updateDetail.value).subscribe(res=>{console.warn("result",res)
    this.alert=true 
  })
  this.updateDetail.reset({})
}
  closealert(){
    this.alert=false
  }
}

