window.onload = validateFunction;

function validateFunction() {

    var btn = document.getElementById('submitButton');

    btn.onclick = function () {

        var loginInput = document.getElementById('loginInput'),
            emailInput = document.getElementById('emailInput'),
            passwordInput = document.getElementById('passwordInput');

        if (loginInput.value !== "") {

            if (loginInput.hasAttribute('class="incorrectUserData"')) {
                loginInput.removeAttribute('class', 'incorrectUserData');
                loginInput.setAttribute('class', 'correctUserData')
            } else {

                loginInput.setAttribute('class', 'correctUserData')
            }


            setTimeout(function () {
                loginInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (loginInput.hasAttribute('class="correctUserData"')) {
                loginInput.removeAttribute('class', 'correctUserData');
                loginInput.setAttribute('class', 'incorrectUserData');
            } else {
                loginInput.setAttribute('class', 'incorrectUserData');
            }


            setTimeout(function () {
                loginInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }
        ;


        if (emailInput.value !== "") {

            if (emailInput.hasAttribute('class="incorrectUserData"')) {
                emailInput.removeAttribute('class', 'incorrectUserData');
                emailInput.setAttribute('class', 'correctUserData')
            } else {
                emailInput.setAttribute('class', 'correctUserData')
            }

            setTimeout(function () {
                emailInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (emailInput.hasAttribute('class="correctUserData"')) {
                emailInput.removeAttribute('class', 'correctUserData');
                emailInput.setAttribute('class', 'incorrectUserData');
            } else {
                emailInput.setAttribute('class', 'incorrectUserData');
            }


            setTimeout(function () {
                emailInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }


        if (passwordInput.value !== "") {

            if (passwordInput.hasAttribute('class="incorrectUserData"')) {
                passwordInput.removeAttribute('class', 'incorrectUserData');
                passwordInput.setAttribute('class', 'correctUserData')
            } else {
                passwordInput.setAttribute('class', 'correctUserData')
            }

            setTimeout(function () {
                passwordInput.removeAttribute('class', 'correctUserData');
            }, 500);

        } else {

            if (passwordInput.hasAttribute('class="correctUserData"')) {
                passwordInput.removeAttribute('class', 'correctUserData');
                passwordInput.setAttribute('class', 'incorrectUserData');
            } else {
                passwordInput.setAttribute('class', 'incorrectUserData');
            }


            setTimeout(function () {
                passwordInput.removeAttribute('class', 'incorrectUserData');
            }, 500);

        }


    };


}