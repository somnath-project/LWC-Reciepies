import { LightningElement} from 'lwc';
//import getcontactList from '@salesforce/apex/ContactListDetails.getContactList';
//import Phone from '@salesforce/schema/Account.Phone';
export default class Assignment1ParentDataShow extends LightningElement {
    


    con = [
        {Name: 'Mahesh', Email: 'Mahesh@gmail.com', Phone: 68746826 },
        {Name: 'Vinod', Email: 'Vinpod@gmail.com ', Phone: 61234567890 },
        {Name: 'Somnath', Email: 'Somnath@gmail.com', Phone: 9876543234567 }
    ];
    

    // @wire(getcontactList)
    // wiredContacts({ error, data }) {
    //     if (data) {
    //         this.contacts = data;
    //     } else if (error) {
    //         this.error = error;
    //     }
   // }


}