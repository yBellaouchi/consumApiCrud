import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  myArray : any = [];
  myCommande :any = {
    id:'',
    name:'',
    poids:'',
    prix:''

  };
  myCondition=false;
  constructor(private myVar: CommandeService) { }

  ngOnInit() {
    
    this.getCommande();
  }
//CRUD
// GET
getCommande()
{
this.myVar.getAll()
.subscribe(data => {

  this.myArray=data;
})

}

//DELETE
deleteCommande(id:any){

this.myVar.delete(id)
.subscribe(()=>{
  this.myArray = this.myArray.filter
  ( myVariable => myVariable.id != id)


})

}
//POST
postCommandes(){
this.myVar.postco(this.myCommande).subscribe((myVariable) =>{
  this.myArray = [myVariable,...this.myArray]
})

}
//UPDATE
editCommande(myVariable:any){
this.myCommande = myVariable;

}
//update
updateMycommannde(){

  this.myVar.updateCommande(this.myCommande)
  .subscribe(commande=>{
    this.myCondition=false;
  })
}
}
