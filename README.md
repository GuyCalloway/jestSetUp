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

arrays .toContain

AXIOS: Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js
--> Good for practising with HTTP client (could use fetch but Axios easier)

JSONplaceholder API = fake rest API for testing make requests to get users and other stuff
e.g. http://jsonplaceholder.typicode.com/users/1
gives info for first in database: name, username, email, address etc... object

axios.get('http://jsonplaceholder.typicode.com/users/1') ==> THIS RETURNS PROMISE
