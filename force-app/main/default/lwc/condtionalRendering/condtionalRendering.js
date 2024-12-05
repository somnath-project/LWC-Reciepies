import { LightningElement } from 'lwc';

export default class CondtionalRendering extends LightningElement {
    property1=false;
    property2=false;
    buttonLabel='Button 3';
    clickHandler(){
        if(this.property1==true){
            this.property1=false;
            this.property2=true;
            this.buttonLabel='Button 2';
        }
        else{
            this.property1=true;
            this.buttonLabel='Button 1';

    }
    
    }
    //Code for wish messages
    isMorning = false;
  isAfternoon = false;
  time;
  timeHandler(event){
    this.time = event.target.value;
  }
  //connectedCallback() {
    //const currentHour = new Date().getHours();
    clickHandler(){
        
    if (this.time < 12) {
      this.isMorning = true;
    } else if (this.time < 18) {
      this.isAfternoon = true;
    } else {
      this.isMorning = false;
      this.isAfternoon = false;
    }
  }
  message1=false;
  message2=false;
  discount1=0.2;
  discount2=0.1;
  totalValue;
  amount;
  amountHandler(event){
    this.amount = event.target.value;
  }
  clickHandler(){
    if(this.amount>1000){
        this.message1=true;
        this.totalValue = (this.totalValue) - (this.totalValue*this.discount1);
    }
    else if(this.amount>500 && this.amount<1000){
        this.message2=true;
    }
    else{
        this.message1=false;
        this.message2=false;
    }
    
  }
}