window.onload = validateFunction;

function validateFunction() {

    var btn = document.getElementsByTagName('button')[0], /*TODO: use jquery here and and in all the file */
        inputs = document.getElementsByTagName('input'),
        numOfInputs = inputs.length;

    btn.addEventListener('click', inputsValidation, false);

    function inputsValidation(submitEvent) {

        submitEvent.preventDefault();

        for (i = 0; i < numOfInputs; i++) {

                if (inputs[i].value) {

                    if (inputs[i].getAttribute("class") == "incorrectUserData") {
                        inputs[i].removeAttribute('class', 'incorrectUserData');
                        inputs[i].setAttribute('class', 'correctUserData')
                    } else {

                        inputs[i].setAttribute('class', 'correctUserData')
                    }

                }

                else {

                    if (inputs[i].getAttribute("class") == "correctUserData") {
                        inputs[i].removeAttribute('class', 'correctUserData');
                        inputs[i].setAttribute('class', 'incorrectUserData');
                    } else {
                        inputs[i].setAttribute('class', 'incorrectUserData');
                    }

                }

                setTimeout(function () {

                    for (i = 0; i < numOfInputs; i++) {

                            if (inputs[i].getAttribute("class") == "correctUserData") {
                                inputs[i].removeAttribute('class', 'correctUserData');
                            }
                            if (inputs[i].getAttribute("class") == "incorrectUserData") {
                                inputs[i].removeAttribute('class', 'incorrectUserData');
                            }

                    }
                }, 500)

        }

    }
}