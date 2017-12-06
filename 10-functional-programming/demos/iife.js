//                                              Using closures and the IFFE module pattern to modularize our code
//  The IIFE module pattern creates local scope within the file, and
// hands data back out to a higher level of scope
const passwordManager = {};
passwordManager.password = 'monkeys';

passwordManager.spill = function () {
    console.log( `don't tell anyone but the secret password is ${this.password}!` );
};

passwordManager.secure = function (newPW) {
    this.password = newPW;
};

passwordManager.spill();