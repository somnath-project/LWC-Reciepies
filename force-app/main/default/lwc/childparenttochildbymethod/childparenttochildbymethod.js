import { LightningElement, api } from 'lwc';

export default class Childparenttochildbymethod extends LightningElement {
    message;
    @api display(str)
    {
        this.message=str.toUpperCase();
    }

}