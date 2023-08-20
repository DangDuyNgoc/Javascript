function Validator(options) {
    var formElement = document.querySelector(options.form);
    var selectorRules = {};

    function getParentElement(inputElement, selector) {
        while(inputElement.parentElement) {
            if(inputElement.parentElement.matches(selector)) {
                return inputElement.parentElement;
            }
            inputElement = inputElement.parentElement;
        }
    };

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorText = getParentElement(inputElement, options.formGroupElement).querySelector(options.errorSelector);

        // console.log(selectorRules);

        var ruleElement = selectorRules[rule.selector];
        // console.log(ruleElement);

        for(var i =0; i<ruleElement.length; i++) {
            errorMessage = ruleElement[i](inputElement.value);
            if(errorMessage) {
                break;
            }
        };

        if(errorMessage) {
            errorText.innerText = errorMessage;
            getParentElement(inputElement, options.formGroupElement).classList.add('invalid');
        } else {
            errorText.innerText = '';
            getParentElement(inputElement, options.formGroupElement).classList.remove('invalid');
        };

        return !errorMessage;
    };

    if(formElement) {
        
        options.rules.forEach(rule => {
           var inputElement = formElement.querySelector(rule.selector);
        //    console.log(inputElement);
           
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            };


           if(inputElement) {
                inputElement.onblur = function() {
                   validate(inputElement, rule);
                }

                inputElement.oninput = function() {
                    var errorText = getParentElement(inputElement, options.formGroupElement).querySelector(options.errorSelector);
                    errorText.innerText = '';
                    getParentElement(inputElement, options.formGroupElement).classList.remove('invalid');
                }   
           };
        });

        formElement.onsubmit = (event) =>{
            event.preventDefault();

            var isError = true;

            options.rules.forEach(rule => {
                
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);

                if(!isValid) {
                    isError = false;
                };
            });

            if(isError) {
                if(typeof options.onSubmit === 'function') {
                    var enableInput = formElement.querySelectorAll('[name]');
                    var formData = Array.from(enableInput).reduce((value, input) => {
                        console.log(value[input.name] = input.value);
                        return (value[input.name] = input.value) && value;
                    }, {});

                    options.onSubmit(formData);
                }
            }
        }
    }

};

Validator.isRequired = function(selector) {
    return {
        selector,
        test(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này!";
        }
    }   
}

Validator.isEmail = function(selector) {
    return {
        selector,
        test(value) {
            var regaxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regaxEmail.test(value) ? undefined : 'Du lieu nhap vao khong dung';
            
        }
    }   
}

Validator.minLength = function(selector, min) {
    return {
        selector,
        test(value) {
            return value.trim().length >= min ? undefined : `Vui long nhap toi thieu ${min} ky tu`;
        }
    }   
}

Validator.isConfirm = function(selector, getPassword, message) {
    return {
        selector,
        test(value) {
           return value.trim() === getPassword() ? undefined : message || 'Vui long kiem tra lai!';
        }
    }   
}