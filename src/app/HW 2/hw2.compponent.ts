import { Component } from "@angular/core";

@Component({
    selector: 'hwq',
    templateUrl: './hw2.compponent.html'
})
export class Hww {

    dispalayVal = " "
    inPt="text"
    iinBut(){
        this.inPt="number"
    }
    iinButt(){
        this.inPt="text"
    }
    // btnstat = false


    // userval(event: any) {
    //     this.dispalayVal = event.target.value
    // }

}