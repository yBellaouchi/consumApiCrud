import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
urlapi='http://localhost:42400/commandes';
  constructor(private http : HttpClient) { }
//GET
  getAll(){ 

return this.http.get<MyInterface>(this.urlapi);

    }
  //DELETE

  delete(id:any){

    return this.http.delete(`${this.urlapi}/${id}`);


  }
  //POST
  postco(commandes){
return this.http.post<MyInterface>(this.urlapi,commandes);

  }
  //update
  updateCommande(commandes){

    return this.http.put(`${this.urlapi}/${commandes.id}`,commandes);
  }
}
