import { LightningElement } from 'lwc';
import signUp from './signUp.html'
import logIn from './logIn.html'
import defaultTemplate from './multipleHtmlInOneComponent.html'
export default class MultipleHtmlInOneComponent extends LightningElement {
    sampleTemplate;
    eventHandler(event){
        this.sampleTemplate=event.target.label;
        
    }
        render(){
            return this.sampleTemplate === 'signUp' ? signUp:
                   this.sampleTemplate === 'logIn' ? logIn:
                   defaultTemplate
        } 

}