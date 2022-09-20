const { isPasswordValid, containSpecialChar } = require("./passwordValidator");


describe("tests for special character checker", ()=> {
    test("containSpecialChar testing with valid input.", ()=> {
        const str = "@abc";
        expect(containSpecialChar(str)).toBeTruthy();
    });
    
    test("containSpecialChar testing with ivalid input.", ()=> {
        const str = "abc";
        expect(containSpecialChar(str)).toBeFalsy();
    });
});


describe("tests for password validator", ()=> {
    test("test with a valid password", ()=> {
        const password = "#Pass12word";
        const expected = {
            status: true,
            error: undefined
        }
        expect(isPasswordValid(password)).toEqual(expected);
    });

    test("test with empty value, should throw an error", ()=> {
        const password = "";
        const error = "Password can't be empty";
        expect(()=> isPasswordValid(password)).toThrow(error);
    });

    test("test with less then 8 char, should return an object with error message.", ()=> {
        const password = "pass";
        const expected = {
            status: false,
            error: "Password must be at least 8 characters"
        };
        expect(isPasswordValid(password)).toEqual(expected);
    });

    test("test with no numbers, should return an object with error message.", ()=> {
        const password = "password";
        const expected = {
            status: false,
            error: "Password must contain at least one number."
        };
        expect(isPasswordValid(password)).toEqual(expected);
    });

    test("test with no special character, should return an object with error message.", ()=> {
        const password = "password22";
        const expected = {
            status: false,
            error: "Password must contain at least one special character."
        };
        expect(isPasswordValid(password)).toEqual(expected);
    });
});





