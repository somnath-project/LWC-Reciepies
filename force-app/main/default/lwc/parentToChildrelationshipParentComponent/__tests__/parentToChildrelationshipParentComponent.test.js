import { createElement } from 'lwc';
import ParentToChildrelationshipParentComponent from 'c/parentToChildrelationshipParentComponent';

describe('c-parent-to-childrelationship-parent-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-parent-to-childrelationship-parent-component', {
            is: ParentToChildrelationshipParentComponent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});