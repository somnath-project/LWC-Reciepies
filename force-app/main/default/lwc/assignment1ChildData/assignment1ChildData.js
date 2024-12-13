import Type from '@salesforce/schema/Account.Type';
import { LightningElement, api } from 'lwc';

export default class Assignment1ChildData extends LightningElement {
    @api contacts;

    columns = [
        {label: 'Name', fieldName: 'Name', Type: 'text'},
        {label: 'Email', fieldName: 'Email', Type: 'text'},
        {label: 'Phone', fieldName: 'Phone', Type: 'Number'},
    ];

}