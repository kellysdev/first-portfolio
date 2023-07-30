// contact form validation
(function() {
    let form = document.querySelector('#contact-form');
    let userNameInput = document.querySelector('#user-name');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;
        
        //Remove an existing error
        let error = container.querySelector('.error-message');
        if (error)  {
            container.removeChild(error);
        }

        //Add an error if the message is not? empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateUserName() {
        let value = userNameInput.value;

        if(!value) {
            showErrorMessage(userNameInput, 'This is a required field.');
            return false;
        }

        showErrorMessage(userNameInput, null);
        return true;
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'This is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if(!value) {
            showErrorMessage(messageInput, 'This is a required field.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function validateForm() {
        let isValidUserName = validateUserName();
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidUserName && isValidEmail && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
    })

})();