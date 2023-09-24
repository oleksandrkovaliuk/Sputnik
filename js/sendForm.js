const form = document.querySelector('#feedback-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const showAlertIfError = document.querySelector('.alert-if-error');
const showAlertIfErrorTextArea = document.querySelector('.alert-if-error.textarea');
const showAlertIfErrorCheckBox = document.querySelector('.alert-if-error.check');
const showAlertIfErrorEmail = document.querySelector('.alert-if-error.email');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function checkOnSubmitFeedbackForm(event) {

    event.preventDefault();

    const dataForm = new FormData(form);
    let allConditionsMet = true;
    for (const [fieldName, fieldValue] of dataForm) {
        if (fieldName === 'name' && fieldValue.length <= 3) {
            nameInput.classList.add('error');
            showAlertIfError.style.display = 'block';
            allConditionsMet = false;
        } else if (fieldName === 'name' && fieldValue.length >= 3) {
            nameInput.classList.remove('error');
            showAlertIfError.style.display = 'none';
        }
    
        if (fieldName === 'email' && !fieldValue.match(validRegex)) {
            emailInput.classList.add('error');
            showAlertIfErrorEmail.style.display = 'block';
            allConditionsMet = false;
        } else if (fieldName === 'email' && fieldValue.match(validRegex)) {
            emailInput.classList.remove('error');
            showAlertIfErrorEmail.style.display = 'none';
        }
    
        if (fieldName === 'message' && fieldValue.length <= 3) {
            messageInput.classList.add('error');
            showAlertIfErrorTextArea.style.display = 'block';
            allConditionsMet = false;
        } else if (fieldName === 'message' && fieldValue.length >= 3) {
            messageInput.classList.remove('error');
            showAlertIfErrorTextArea.style.display = 'none';
        }
    
        if (fieldName === 'checkagree' && fieldValue !== 'on') {
            showAlertIfErrorCheckBox.style.display = 'block';
            allConditionsMet = false;
        } else {
            showAlertIfErrorCheckBox.style.display = 'none';
        }
    }
    if(allConditionsMet){
        alert("Форма успішно відправлена!");
    }

}