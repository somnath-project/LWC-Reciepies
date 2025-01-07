import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'; //get Record without Apex class
//import Account from '@salesforce/schema/AccountHistory.Account';

const FIELDS = ['Account.Name', 'Account.Industry', 'Account.Phone'];

export default class BasicWireDecorator extends LightningElement {
  @api recordId = '001IS0000075smMYAQ';
  
  @wire(getRecord,{recordId : '$recordId' , fields: FIELDS })
  account;
 //getter Method to retreive the Account Name
  get accountName() {
    return this.account.data ? this.account.data.fields.Name.value : '';
}

    get accountIndustry(){
        return this.account.data ? this.account.data.fields.Industry.value : '';
    }

    get accountPhone(){
        return this.account.data ? this.account.data.fields.Phone.value : '';
    }
}