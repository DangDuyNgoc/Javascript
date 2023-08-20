function Validator2(formSelector, formGroupSelector) {

    function getParentElement(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            } 
            element = element.parentElement;
        }
    }

    var formRules = {};
    var formElement = document.querySelector(formSelector);

    var validatorRules = {
        required: function (value) {
            if (value) {
                return undefined;
            } else {
                return 'Vui long nhap truong nay';
            }
        },

        email: function (value) {
            var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? undefined : 'Du lieu nhap vao khong dung';
        },

        min: function (min) {
            return (value) => {
                return value.length >= min ? undefined : `Vui long nhap ${min} ki tu`;
            }
        }
    }

    if (formElement) {
        var inputElements = formElement.querySelectorAll('[name][rule]');

        for (var input of inputElements) {
            formRules[input.name] = input.getAttribute('rule');

            var rules = input.getAttribute('rule').split('|');
            for (var rule of rules) {
                var ruleValue = rule.includes(':');

                if (ruleValue) {
                    var ruleSplit = rule.split(':');
                    rule = ruleSplit[0];
                }

                var ruleFunc = validatorRules[rule];

                if (ruleValue) {
                    ruleFunc = ruleFunc(ruleSplit[1]);
                }

                // console.log(rule);

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            // lắng nghe sự kiện
            input.onblur = handleValidate;
            input.oninput = handleClearInput;
        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            rules.find(rule => {
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            if(errorMessage) {
                var formGroup = getParentElement(event.target, formGroupSelector);
                if(formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');

                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
                console.log(formGroup);
            }

            return !errorMessage;
        }

        function handleClearInput(event) { 
            var formGroup = getParentElement(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');

                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
        // console.log(formRules);
    }

    // Handle submit form
    formElement.onsubmit = function(event) {
        event.preventDefault();
        var inputElements = formElement.querySelectorAll('[name][rule]');
        var isError = true;

        for (var input of inputElements) {
            if(!handleValidate({target: input})) {
                isError = false;
            }
        }
        console.log(isError);

        if(isError) {
            formElement.submit();
        }
    }
}