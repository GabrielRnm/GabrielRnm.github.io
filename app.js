class FormSubmit {
    constructor(settings) {
        this.settings = settings; 
        this.form = document.querySelector(settings.form);
        this.formButton =document.querySelector(settings.formButton);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }

}