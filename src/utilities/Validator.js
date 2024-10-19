export default class Validator {
    constructor() {
        this.errors = {};
    }

    required(value, fieldName, message = `${fieldName} est requis`) {
        if (!value || value.trim() === '') {
            this.addError(fieldName, message);
        }
        return this;
    }

    minLength(value, min, fieldName, message = `${fieldName} doit avoir au moins ${min} caractères`) {
        if (value.length < min) {
            this.addError(fieldName, message);
        }
        return this;
    }

    maxLength(value, max, fieldName, message = `${fieldName} ne doit pas dépasser ${max} caractères`) {
        if (value.length > max) {
            this.addError(fieldName, message);
        }
        return this;
    }

    email(value, fieldName, message = `L'adresse email est invalide`) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    phone(value, fieldName, message = `Le numéro de téléphone est invalide`) {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    senegalPhone(value, fieldName, message = `Le numéro de téléphone est invalide`) {
        const senegalPhonePattern = /^(70|76|77|78)\d{7}$/;
        if (!senegalPhonePattern.test(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    date(value, fieldName, message = `${fieldName} doit être une date valide`) {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/; 
        if (!datePattern.test(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    inArray(value, validValues, fieldName, message = `${fieldName} doit être une des valeurs suivantes: ${validValues.join(', ')}`) {
        if (!validValues.includes(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    url(value, fieldName, message = `${fieldName} doit être une URL valide`) {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?$/;
        if (!urlPattern.test(value)) {
            this.addError(fieldName, message);
        }
        return this;
    }

    addError(fieldName, message) {
        if (!this.errors[fieldName]) {
            this.errors[fieldName] = [];
        }
        this.errors[fieldName].push(message);
    }

    hasErrors() {
        return Object.keys(this.errors).length > 0;
    }

    getErrors() {
        return this.errors;
    }

    reset() {
        this.errors = {};
    }
}
