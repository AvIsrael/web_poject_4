export const formValidator = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    const showInputError = (inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(selectors.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(selectors.errorClass);
    };

    const hideInputError = (inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(selectors.inputErrorClass);
        errorElement.classList.remove(selectors.errorClass);
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
            buttonElement.classList.add(selectors.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(selectors.inactiveButtonClass);
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
            hideInputError(inputElement);
        });
        formElement.reset();
    }

    const resetWholeForm = () => {
        resetForm();
        toggleButtonState();
    }

    const enableValidation = () => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners();
    }
    return {resetWholeForm, enableValidation}
}
