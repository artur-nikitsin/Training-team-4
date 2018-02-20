window.onload = validateFunction;

function validateFunction() {

    var btn = document.getElementById('createProfileButton');

    btn.onclick = function () {

        var userNameInput = document.getElementById('userNameInput'),
            userSurnameInput = document.getElementById('userSurnameInput'),
            userPhoneNumberInput = document.getElementById('userPhoneNumberInput');

        if (userNameInput.value !== "") {

            if (userNameInput.hasAttribute('class="incorrectUserData"')) {
                userNameInput.removeAttribute('class', 'incorrectUserData');
                userNameInput.setAttribute('class', 'correctUserData')
            } else {
                userNameInput.setAttribute('class', 'correctUserData')
            }

            setTimeout(function () {
                userNameInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (userNameInput.hasAttribute('class="correctUserData"')) {
                userNameInput.removeAttribute('class', 'correctUserData');
                userNameInput.setAttribute('class', 'incorrectUserData');
            } else {
                userNameInput.setAttribute('class', 'incorrectUserData');
            }


            setTimeout(function () {
                userNameInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }


        if (userSurnameInput.value !== "") {

            if (userSurnameInput.hasAttribute('class="incorrectUserData"')) {
                userSurnameInput.removeAttribute('class', 'incorrectUserData');
                userSurnameInput.setAttribute('class', 'correctUserData')
            } else {
                userSurnameInput.setAttribute('class', 'correctUserData')
            }

            setTimeout(function () {
                userSurnameInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (userSurnameInput.hasAttribute('class="correctUserData"')) {
                userSurnameInput.removeAttribute('class', 'correctUserData');
                userSurnameInput.setAttribute('class', 'incorrectUserData');
            } else {
                userSurnameInput.setAttribute('class', 'incorrectUserData');
            }


            setTimeout(function () {
                userSurnameInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }


        if (userPhoneNumberInput.value !== "") {

            if (userPhoneNumberInput.hasAttribute('class="incorrectUserData"')) {
                userPhoneNumberInput.removeAttribute('class', 'incorrectUserData');
                userPhoneNumberInput.setAttribute('class', 'correctUserData')
            } else {
                userPhoneNumberInput.setAttribute('class', 'correctUserData')
            }

            setTimeout(function () {
                userPhoneNumberInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (userPhoneNumberInput.hasAttribute('class="correctUserData"')) {
                userPhoneNumberInput.removeAttribute('class', 'correctUserData');
                userPhoneNumberInput.setAttribute('class', 'incorrectUserData');
            } else {
                userPhoneNumberInput.setAttribute('class', 'incorrectUserData');
            }

            setTimeout(function () {
                userPhoneNumberInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }


    };


}