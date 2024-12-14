import { LightningElement } from 'lwc';

export default class ApiDecoraterParentComp extends LightningElement {
    greetingMessage = '';

    nameMesg = '';

    handleGreeting(event){
        this.greetingMessage = event.detail;
    }


    handleChange(event){
        this.nameMesg = event.target.value;
    }
}