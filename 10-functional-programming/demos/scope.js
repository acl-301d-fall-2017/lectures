//                                                                              scope of "hidden" variable
function secretPassword () {
    const hidden = 'standing desk';
    console.log( 'I know the hidden word', hidden === 'standing desk' ); // true

    if (hidden === 'standing desk') {
        var access = 'allowed';
        const clearance = 3;

        console.log(`User is ${access} with clearance level ${clearance}.`);
    }

    console.log(`User is ${access} with clearance level ${clearance}.`);
}

secretPassword();
// console.log( `I don't know the hidden word! ${hidden} );



//                                                                               closure
function superSecretPassword() {
    // has access to its variables, and any global variables
    const password = 'standing desk';
    console.log( 'I know the hidden word', password === 'standing desk' ); // true

    function spillIt () {
        // has access to its variables, its parent variables, and any global variables
        const pin = '2221';
        console.log( `don't tell anyone but the secret password is ${password}!` );
        console.log(`or you can use the pin: ${pin}`);
    }

    // we can expose enclosed variables or functions by returning them.
    // return spillIt;
}

superSecretPassword();
// spillIt();
// console.log( `I don't know the hidden word! ${hidden} );
