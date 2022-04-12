import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {

  constructor() { }

  screen = "" ;
  a!: string;
  b!: string;
  c!: string;
  d = "" ;
  e = "" ;

  
  ngOnInit(): void {
  }

  intervalue(value: string){
    if((this.b == "+") || (this.b == "-") || (this.b == "*") || (this.b == "/")){
      this.d = value ;
      this.screen = this.screen + value ;
      this.c = this.d ;
    }
    else{
      this.screen = this.screen + value ;
      this.a = this.screen ;
    }
  }

  condition(value : string){
    this.screen = this.screen + value ;
    this.b = value ;
  }

  clear(){
    this.screen = "" ;
    this.a = "" ;
    this.b = "" ;
    this.c = "" ;
    this.d = "" ;
  }

  objectArray = [] ;

  result(){
    if(this.b == "+"){
      this.screen = this.screen +"="+(parseInt(this.a)+parseInt(this.c)).toString();
      this.screen = (parseInt(this.screen)+parseInt(this.c)).toString();
    }
    if(this.b == "-"){
      this.screen = this.screen +"="+(parseInt(this.a)-parseInt(this.c)).toString();
      this.screen = (parseInt(this.screen)-parseInt(this.c)).toString();
    }
    if(this.b == "*"){
      this.screen = this.screen +"="+(parseInt(this.a)-parseInt(this.c)).toString();
      this.screen = (parseInt(this.screen)*parseInt(this.c)).toString();
    }
    if(this.b == "/"){
      this.screen = this.screen +"="+(parseInt(this.a)/parseInt(this.c)).toString();
      this.screen = (parseInt(this.screen)/parseInt(this.c)).toString();
    }
  }

}
