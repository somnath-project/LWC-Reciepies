import { LightningElement,api } from 'lwc';

export default class ParentToChildRelationshipChildComponent extends LightningElement {
@api status="Status is pending from college side";
@api collegeInformation;

}