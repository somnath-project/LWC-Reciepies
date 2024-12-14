import { LightningElement, api } from 'lwc';

export default class ApiDecoraterChildComp extends LightningElement {

    @api name;

    handleButtonClick(){
        const greetingEvent = new CustomEvent( 'greet',
            { detail:  `Hello, ${this.name}! Nice to meet you`}
        );

        this.dispatchEvent(greetingEvent);
    }
}