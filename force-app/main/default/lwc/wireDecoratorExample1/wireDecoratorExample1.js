import { LightningElement, track, wire } from 'lwc';
import searchAccountDeatils from '@salesforce/apex/getAccountDetails.searchAccountDeatils';
const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Industry', fieldName: 'Industry', editable: true }
                ];
export default class WireDecoratorExample1 extends LightningElement {
    searchIndustry;
    searchHandler(event){
        this.searchIndustry=event.target.value;
    }
@track accountColumn=columns;
@track data=[];
@wire (searchAccountDeatils,{industryName : '$searchIndustry'})
recordList({data,error})
{
    if(data)
{
    this.data=data;
}
if(error)
{
    console.log('Error Message');
}
}
}