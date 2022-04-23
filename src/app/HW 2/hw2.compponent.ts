import { Component } from "@angular/core";

@Component({
    selector: 'hwq',
    templateUrl: './hw2.compponent.html'
})
export class Hww {

    dispalayVal = "Type somthing"
    userval(event: any) {
        this.dispalayVal=event.target.value
        console.log(event);
        
    }

}