import { LightningElement } from 'lwc';

export default class ParentToChildrelationshipParentComponent extends LightningElement {
    statusuniversity;
    statusHandler(event){
        this.statusuniversity = event.target.value;
    }
    collegeInformation=[
        {
            name:"ramdeobaba college of Engg.",
            Fees:200000,
            Seats:30
        },
        {
            name:"YCCE college of Engg.",
            Fees:300000,
            Seats:10
        }
    ];

}