import { LightningElement, track } from 'lwc';

export default class DynamicFormForDropDownList extends LightningElement {
    ShowNameField = false;
    ShowEmailField = false;
    @track selectedFormvalue = '';
    @track formTypeOptions = [
        { label: 'Select Form type', value: '' },
         { label: 'Name', value: 'Full Name' },
         { label: 'Email', value: 'Email Address' },
    ];

    handleChange(event){
        this.selectedFormvalue = event.detail.value;
        this.ShowNameField = this.selectedFormvalue === 'Full Name';
        this.ShowEmailField = this.selectedFormvalue === 'Email Address';
    }

    // @track selectedValues = [];  
    // options = [  
    //     { label: 'Option 1', value: 'option1' },  
    //     { label: 'Option 2', value: 'option2' },  
    //     { label: 'Option 3', value: 'option3' }  
    // ];  

    // multiselecthandleChange(event) {  
    //     const value = event.target.value;  
    //     if (event.target.checked) {  
    //         this.selectedValues = [...this.selectedValues, value];  
    //     } else {  
    //         this.selectedValues = this.selectedValues.filter(item => item !== value);  
    //     }  
    // }

    @track selectedValues = [];  
    @track selectedLabels = 'Select options';  
    @track isDropdownOpen = false;  

    options = [  
        { label: 'Option 1', value: 'option1' },  
        { label: 'Option 2', value: 'option2' },  
        { label: 'Option 3', value: 'option3' }  
    ];  

    toggleDropdown() {  
        this.isDropdownOpen = !this.isDropdownOpen;  
    }  

    handleChange(event) {  
        const value = event.target.value;  
        if (event.target.checked) {  
            // Add selected value  
            this.selectedValues = [...this.selectedValues, value];  
        } else {  
            // Remove unselected value  
            this.selectedValues = this.selectedValues.filter(item => item !== value);  
        }  

        // Update selected labels for display  
        const selectedOptions = this.options.filter(option => this.selectedValues.includes(option.value));  
        this.selectedLabels = selectedOptions.map(option => option.label).join(', ') || 'Select options';  
    }  

}