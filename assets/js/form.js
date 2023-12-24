document.addEventListener('DOMContentLoaded', function () {
    loadFormData();
});

let signUpButton = document.querySelector('.btn__signUp');


signUpButton.onclick = () => {
    let nameValue = document.getElementById('name').value;
    let surNameValue = document.getElementById('surName').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;

    var signUpData = {
        nameValue: nameValue,
        surNameValue: surNameValue,
        emailValue: emailValue,
        passwordValue: passwordValue
    };

    localStorage.setItem('signUpData', JSON.stringify(signUpData));
    signName.innerHTML = nameValue;
};

