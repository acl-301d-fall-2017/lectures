//                                              Using closures and the IIFE module pattern to modularize our code


// IIFE = immediately invoked function expression

function hi () {
    console.log('I am NOT immediately invoked!');
}
// hi();

// (function(pw) {
//     console.log('I AM immediate invoked!');
//     console.log(`The password is ${pw}`);
// })('password');

//  The IIFE module pattern creates local scope within the file, and
// hands data back out to a higher level of scope

const app = {};

(function (app) {
    const passwordManager = {};
    passwordManager.password = 'monkeys';

    passwordManager.spill = function () {
        console.log( `don't tell anyone but the secret password is ${this.password}!` );
    };

    passwordManager.secure = function (newPW) {
        this.password = newPW;
    };

    function passwordCheck() {
        // secret function
    }

    app.passwordManager = passwordManager;
})(app);

app.passwordManager.spill();