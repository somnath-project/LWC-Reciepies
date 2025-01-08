import { LightningElement, wire } from 'lwc';
import { getRecord, deleteRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name'

const FIELDS = [ACCOUNT_NAME, ACCOUNT_INDUSTRY, ACCOUNT_PHONE, ACCOUNT_OWNER]
export default class WireDecoratorWithGetAndDeleteRecord extends LightningElement {
    accountName;
    industry;
    phone;
    owner;
    accountId;
    accountDetails;
    @wire (getRecord, {recordId : '001J400000QzAvlIAF', fields:FIELDS})
    wireAccount({error, data}){
        if(error){
            console.log("error"+JSON.stringify(error))
        }
        if(data){
            this.accountDetails = data;
            console.log("Account Details:"+JSON.stringify(this.accountDetails))
            this.accountId = this.accountDetails.id;
            this.accountName = this.accountDetails.fields.Name.value;
            this.industry = this.accountDetails.fields.Industry.value;
            this.phone = this.accountDetails.fields.Phone.value;
            this.owner = this.accountDetails.fields.Owner.displayValue;
        }
    }
    deleteAccount(){
        deleteRecord(this.accountId)
        .then(result=>{
            window.alert("Record Deleted")
            console.log("Record Deleted")
        })
        .catch(error=>{
            console.log(error)
        })
    }
}