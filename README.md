Have node.js installed

run npm init -y : creates package.json file

run npm i -D jest : installs jest creates node modules (-D saves it as dependency)
--change script in package.json file to "jest"

create file, then create file.test.js that jest will pick up name .test.js

add functions to file, then
module.exports = file
at end of js file

in testing file: const functions = require('./functions.js');
test("description"), () => {
expect(functions.function(inputs)).toBe(result);
};

CHECKS FOR TRUTHY VALUES:
==> toBeNull matches only null  
==> toBeUndefined matches only undefined
==> toBeDefined
==> toBeTruthy
==> toBeFalsy
