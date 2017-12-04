//                                                    THE CONCEPT
/*
    A callback function is a function passed into another function
    which will call it at some point.

    functionA(functionB); // in functionA's body, functionB will be called


    You've used them extensively when dealing with events:
    btn.addEventListener('click', clickHandler); // clickHandler is a callback that will be called later! 
*/



//                                                         USING THEM
function sing (lyrics) {
    console.log(`~~la la ~~la ~${lyrics}`);
}
// sing('where is the love?');






function singAnd (lyrics, callback) {
    console.log(`~~la la ~~la ~${lyrics}` );
    callback();
}

// singAnd('LET IT GOOOOO!', () => { console.log('*ice storm*'); });
// singAnd('it is a small world after all', 'a string' ); // fails bc string is not a function


function dropMic () {
    console.log('*drops mic*');
}

singAnd('can you paint with all the colors of the winnnnnd', dropMic);

singAnd('call me, beep me, if you wanna reach me', () => { console.log('** KIM POSSIBLE!**'); });



//                                               AGAIN!
// define our function Hike.fetchall() with a callback parameter
// Hike.fetchAll = monekys => {
//     $.get('/hikes')
//         .then(
//             function(results) {
//                 Hike.loadAll(results);
//                 monekys();
//             }
//         );
// };

// call our function and pass it a callback function
// Hike.fetchAll(() => {console.log('monkeys');});


