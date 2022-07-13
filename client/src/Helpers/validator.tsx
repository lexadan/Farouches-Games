import validator from "validator";

export function alphaValidator(value: string) {
    if (!validator.isAlphanumeric(value)) {
        return 'Caractères interdits';
    } else {
        return null;
    }
}

export function alphaSpaceValidator(value: string) {
    if (!validator.isAlpha(value, 'fr-FR', {ignore: ' \'',})) {
        return 'Caractères interdits';
    } else {
        return null;
    }
}

export function numerical(value: string) {
    if (!validator.isNumeric(value)) {
        return 'Caractères interdits';
    } else {
        return null;
    }
}

export function emailValidator(value: string) {
    if (!validator.isEmail(value)) {
        return 'Format invalide';
    } else {
        return null;
    }
}

export function passwordValidator(value: string) {
    if (!validator.isLength(value, {min: 8})) {
        return 'Taille invalide (min 8)';
    } else {
        return null;
    }
}
