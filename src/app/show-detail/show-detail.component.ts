import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WlistService } from '../wlist.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
collection:any=[]
  constructor(private rout:ActivatedRoute,private _detail:WlistService) { }

  ngOnInit(): void {
    this._detail.showDetail(this.rout.snapshot.params.id).subscribe(
      data=>this.collection=data
    )
  }
 

}
