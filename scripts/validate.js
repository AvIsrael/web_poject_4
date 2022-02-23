export const formValidator = (formElement) => {
    const validateSettings = {
        formSelector: ".popup__form",
        inputSelector: ".popup__item",
        submitButtonSelector: ".popup__button-sbmt",
        inactiveButtonClass: ".popup__button-sbmt_disabled",
        inputErrorClass: "popup__item_type_error",
        errorClass: "popup__error_visible",
    };
    const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
    const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);


    const showInputError = (inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(validateSettings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(validateSettings.errorClass);
    };

    const hideInputError = (inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(validateSettings.inputErrorClass);
        errorElement.classList.remove(validateSettings.errorClass);
        errorElement.textContent = "";
    };

    const checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            showInputError(inputElement);
        } else {
            hideInputError(inputElement);
        }
    }
    const hasInvalidInput = () => {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }
    const toggleButtonState = () => {
        if (hasInvalidInput()) {
            buttonElement.classList.add(validateSettings.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(validateSettings.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    const setEventListeners = () => {
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                checkInputValidity(inputElement);
                toggleButtonState();
            });
        });

    }
    const resetForm = () => {
        inputList.forEach((inputElement) => {
            inputElement.value = "";
            hideInputError(inputElement);
        });
    }
    const resetWholeForm = () => {
        resetForm();
        toggleButtonState();
    }
    const resetInputs = () => {
        resetForm();
        buttonElement.classList.remove(validateSettings.inactiveButtonClass);

    }
    const enableValidation = () => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners();
    }
    return {resetWholeForm, resetInputs, enableValidation}
}
