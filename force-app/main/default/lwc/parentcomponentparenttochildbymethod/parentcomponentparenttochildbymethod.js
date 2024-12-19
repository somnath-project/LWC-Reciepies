import { LightningElement } from 'lwc';

export default class Parentcomponentparenttochildbymethod extends LightningElement {
    caseHandler(event){
        this.template.querySelector('c-childparenttochildbymethod').display(event.target.value);
    }
}

