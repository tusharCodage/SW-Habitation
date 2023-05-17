const email_validation_keyset =
    //eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))|((([a-zA-Z\-0-9]+\.){1,2})[a-zA-Z]{2,}))$/
const password_validatoin_keyset =
    //eslint-disable-next-line no-useless-escape
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
const regEx = /^(\d{5})\d*$/
export const Validation = {
    // check empty , undefined or null string
    isEmpty: function (value = '') {
        try {
            if (value?.trim() == '') {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log('error to check empty string >>>>> ', e)
        }
    },

    // Check Email is valide or not
    isValidEmail: function (value) {
        const CHECK_EMAIL = email_validation_keyset
        //eslint-disable-next-line
        //@ts-ignore
        if (CHECK_EMAIL?.test(value.trim()) == 0) {
            return false
        }
        return true
    },
    isValidNumber: function (value) {
        const CHECK_NUMBER = regEx
        //eslint-disable-next-line
        //@ts-ignore
        if (CHECK_NUMBER?.test(Number(value)) == 0) {
            return false
        }
        return true
    },

    // Check URL is valide or not
    isValidHttpURL: function (value) {
        let url
        if (!value) {
            return false
        }
        try {
            url = new URL(value)
        } catch (_) {
            return false
        }
        return url.protocol === 'http:' || url.protocol === 'https:'
    },
}

export const validate = (
    /** Document to be validated */
    document,
    /** Excluded fields from validation */
    excluded_fields = [],
) => {
    const errors = []
    const validateField = (key, value) => {
        if (![''].includes(key)) {
            switch (key) {
                case 'url':
                    if (!Validation.isValidHttpURL(String(value))) {
                        errors.push(key)
                    }
                    return
                case 'email':
                    if (
                        Validation.isEmpty(String(value)) ||
                        !Validation.isValidEmail(String(value))
                    ) {
                        errors.push(key)
                    }
                    return
                case 'phone':
                    if (
                        Validation.isEmpty(String(value)) ||
                        !Validation.isValidNumber(Number(value))
                    ) {
                        errors.push(key)
                    }
                    return
                default:
                    if (Validation.isEmpty(String(value))) {
                        errors.push(key)
                        return
                    }
            }
        }
    }
    Object.entries(document)
        .filter(([key, _]) => !excluded_fields.includes(key))
        .forEach(([key, value]) => validateField(key, value))
    return [errors.length === 0, errors]
}
