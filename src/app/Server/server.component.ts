
import { Component } from "@angular/core";

// the @Component tells the system that it is acomponent class
@Component({
    selector: 'app-server',
   templateUrl: './server.component.html'
})
export class ServerComponent{
    // Insidde the class we can give values adn use them as dynamic values in any templates
    nem: string="fahad";
    order: number= 11232;
    pricce:number = 500;
    // so here with Property Binding we can manipulate the values as we want.
    bttn: boolean=true;
    WlcmMessage="Sorry the website is under cionstruction"
    resept(){
        // so we can return a varrible and use the method in the fucntion. 
        return this.pricce;
    }
    
}