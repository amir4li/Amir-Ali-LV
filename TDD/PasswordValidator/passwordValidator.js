function containSpecialChar(str) {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(str)){
    return true;
    } else {
    return false;
    };
};

function isPasswordValid(password) {
    if (!password) {
        throw "Password can't be empty"
    };

    result = {
        status: true,
        error: undefined
    }

    if (password.length < 8) {
        result.status = false;
        result.error = "Password must be at least 8 characters";
        return result;
    };

    if (!/\d/.test(password)) {
        result.status = false;
        result.error = "Password must contain at least one number.";
        return result;
    };

    if (containSpecialChar(password) === false) {
        result.status = false;
        result.error = "Password must contain at least one special character.";
        return result;
    };

    return result;
};


module.exports = { isPasswordValid, containSpecialChar };

