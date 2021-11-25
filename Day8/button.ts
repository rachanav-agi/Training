import { Component } from '@angular/core';



@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'mypro';



getName(){
console.log("clicked");
}
getN(){
console.log("keyup");
}
getdown(){
console.log("keydown");
}



eventCallFunction(eventName:string){
console.log(eventName +" is called ...")
}