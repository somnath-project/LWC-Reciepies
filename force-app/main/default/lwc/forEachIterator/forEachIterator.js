import { LightningElement } from 'lwc';

export default class ForEachIterator extends LightningElement {
    Employee = [
        { Name: "Sandeep", Age: 35, Salary: 40000 },
        { Name: "Nagnath", Age: 23, Salary: 80000 },
        { Name: "Vinod", Age: 28, Salary: 100000,}
    ];
}