import { Component, OnInit } from '@angular/core';
import { WlistService } from '../wlist.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  alert=false
  constructor(private http:WlistService,private _router:Router) { }

  addDetail=new FormGroup({
    date:new FormControl('',Validators.required),
    weight:new FormControl('',Validators.required),
    bodyfat:new FormControl('',Validators.required)
  })
  //get 
  get weight(){return this.addDetail.get('weight')}
  get bodyfat(){return this.addDetail.get('bodyfat')}
  
  ngOnInit(): void {

  }
  clickData(){
    console.log(this.addDetail.value)
    this.http.saveData(this.addDetail.value).subscribe(m=>{this.alert=true})
    this.addDetail.reset({})
    this._router.navigate(['/list'])
    location.reload()
  }
  closealert(){
    this.alert=false
  }

}
