import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getMaxListeners } from 'process';
@Injectable({
  providedIn: 'root'
})
export class WlistService {
url="http://localhost:3000/entries"
rooturl="http://localhost:3000/comment"
  constructor(private http:HttpClient) { }
    //get
    getlist(){
      return this.http.get(this.url)
    }
    //post
    saveData(data){
      return this.http.post(this.url,data)
    }
    //delete
    deleteData(id){
      return this.http.delete(`${this.url}/${id}`)
    }
    //edit
    //get
    updateDetail(id){
      return this.http.get(`${this.url}/${id}`)
    }
    //put
    editDetail(id, data) {
      return this.http.put(`${this.url}/${id}`, data)
    }
    //details get
    showDetail(id){
      return this.http.get(`${this.url}/${id}`)
    }
    commentUsr(data){
      return this.http.post(this.rooturl,data)
    }
    getComment(){
      return this.http.get(this.rooturl)
    }
}
