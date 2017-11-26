'use strict';

//                                                USING TEMPLATE LITERALS

// const name = prompt('What is your name?');
// const favDessert = prompt('Hi ' + name + ', what is your favorite dessert?');
// alert( favDessert.toUpperCase() + '????? GROSS. Here ' + name + '. Have some cake and ice cream instead.').






//                                                CREATING TABS WITH JQUERY

// TODO replace these event listeners with jQuery event listeners
const cakeTab = document.querySelector('[data-tab="cake"]');
cakeTab.addEventListener('click', changeTabs);

const iceCreamTab = document.querySelector('[data-tab="ice-cream"]');
iceCreamTab.addEventListener('click', changeTabs);

function changeTabs () {
    // get the data-tab attribute of the link that was clicked
    // TODO use jQuery to get the data-tab value instead of getAttribute
    const clickedTabData = event.target.getAttribute('data-tab');
    console.log( `${clickedTabData} was clicked!` );

    // TODO hide all sections and reveal the appropriate section 
    // (note: the sections have ids to match the data-tab values)
}

// TODO hide all sections when the page first loads, and simulate a click on the cake section so its open






//                                                                    CAKE VIEW

/*                                                                     IN CLASS
    0. What is the overall purpose or goal of your function?
    1. If there are event listeners in your function, answer the following questions about them: 
        A. What element is the event listener being attached to?
        B. What event is the element listening for?
        C. What happens in the callback function?
    2. Where is your function's call site?
*/

const cakeView = {};

cakeView.init = function () {
    this.handleFlavor();
    this.handleIcing();
    this.handleNewIcing();
};

cakeView.handleIcing = function () {
    const $cakeLayers = $('#actual-cake div');
    $('select[name="icing"]').change( function () {
        $cakeLayers.css('border-color', $( this ).val());
    });
};

cakeView.handleFlavor = function () {
    const $cakeLayers = $('#actual-cake div');
    $('input[name="flavor"]').change( function () {
        console.log('this is the element listening for the event:', this);
        console.log('$(this) is that same element as a jQuery object!:', $(this));
    
        $cakeLayers.css('background-color', $(this).val());
    });
};

cakeView.handleNewIcing = function () {
    $('#new-icing').hide();

    $('#cake button').click( function () {
        $('#new-icing').show();
    });

    $('#new-icing').submit( function () {
        event.preventDefault();

        const $colorInput = $(this).find('input');
        const color = $colorInput.val();
        const newOption = `<option value='${color}'>${color}</option>`;
        $('select[name="icing"]').append(newOption);

        $colorInput.val('');
    });
};

cakeView.init();






//                                                           ICE CREAM VIEW

const iceCreamView = {};

iceCreamView.init = function () {
    this.handleCone();
    this.handleCup();
    this.handleSurprise();
};

iceCreamView.handleCone = function () {
    $('#cone').on('click', function () {
        $(this).before( $('.scoop.template').clone().removeClass('template') );
    });

    // add event listener to div.scoop parent
    $('div[data-type="cone"]').on('click', '.scoop', function () {
        if (event.target.id === 'cone') return;
        const clicked = $(event.target);
        clicked.addClass('mint');
    });   
};

iceCreamView.handleCup = function () {
    $('#cup').on('click', function () {
        $(this).before( $('.scoop.template').clone().removeClass('template') );
    });

    // add event listeners to div.scoop
    $('div[data-type="cup"] .scoop').on('click', function () {
        const clicked = $(event.target);
        clicked.addClass('mint');
    });
};

iceCreamView.handleSurprise = function () {
    $( '#ice-cream button' ).on( 'click', function () {
        // use .each bc we can't use .forEach on a jQuery object!
        $('.scoop').each( function () {
            $(this).css('background-color', randomColor());
        });
    });

    // helper function
    function randomColor () {
        const colors = ['peachpuff', 'lightblue', 'mistyrose', 'salmon', 'honeydew', 'navy', 'red', 'cyan', 'gold', 'orchid'];
        
        return colors[ Math.floor( Math.random() * colors.length ) ];
    }
};

iceCreamView.init();