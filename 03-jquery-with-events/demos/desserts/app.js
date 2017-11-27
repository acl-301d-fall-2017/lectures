'use strict';

//                                                USING TEMPLATE LITERALS

`this is a template literal!!!`;

function greet () {
    const name = prompt('What is your name?');
    // const favDessert = prompt('Hi ' + name + ', what is your favorite dessert?');
    const favDessert = prompt(`Hi ${name}, what is your favorite dessert?`);

    // alert( favDessert.toUpperCase() + '????? GROSS. Here ' + name + '. Have some cake and ice cream instead.');
    alert(`${favDessert.toUpperCase()}????? GROSS. Here ${1 + 2}, have some cake and ice cream instead.`);
}

// greet();




//                                                CREATING TABS WITH JQUERY

// TODO replace these event listeners with jQuery event listeners
// const cakeTab = document.querySelector('[data-tab="cake"]');
// cakeTab.addEventListener('click', changeTabs);

// const iceCreamTab = document.querySelector('[data-tab="ice-cream"]');
// iceCreamTab.addEventListener('click', changeTabs);

$('a[data-tab]').click(changeTabs);

function changeTabs () {
    // get the data-tab attribute of the link that was clicked
    // TODO use jQuery to get the data-tab value instead of getAttribute
    // const clickedTabData = event.target.getAttribute('data-tab');
    // const clickedTabData = $(event.target).attr('data-tab');
    const clickedTabData = $(this).attr('data-tab');
    console.log( `${clickedTabData} was clicked!` );

    // TODO hide all sections and reveal the appropriate section 
    // (note: the sections have ids to match the data-tab values)
    $('.tab-content').hide();
    $(`section#${clickedTabData}`).show();
}

// TODO simulate a click on the cake section so its open
// $('.tab-content').hide();
$('[data-tab="ice-cream"]').click();





//                                                                    CAKE VIEW

/*                                                                     IN CLASS
    0. What is the overall purpose or goal of your function?
    1. If there are event listeners in your function, answer the following questions about them: 
        A. What element is the event listener being attached to? What line in `index.html` is it on?
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







//                                                           ICE CREAM VIEW

const iceCreamView = {};

iceCreamView.init = function () {
    this.handleCone();
    this.handleCup();
    this.handleSurprise();
};

iceCreamView.handleCone = function () {
    // TODO add new scoops to the cone when the cone is clicked
    $('#cone').on('click', function () {
        $(this).before($('.scoop.template').clone().removeClass('template'));
    });

    // TODO change the "flavor" of a scoop in the cone when it is clicked
    // tell the parent div to listen, but only run if a .scoop child was clicked
    $('div[data-type="cone"]').on('click', '.scoop', function () {
        const $clickedScoop = $(event.target);
        $clickedScoop.toggleClass('mint');
    });
};

iceCreamView.handleCup = function () {
    // when the cup is clicked, give it another scoop!
    // TODO switch to using jQuery's on method
    $('#cup').on('click', function () {
        const $newScoop = $('.scoop.template').clone().removeClass('template');
        $(this).before($newScoop);
    });

    // TODO when a scoop in the cup is clicked, change it to mint!
    // attaches click listener to existing scoops, but not new ones, because it only runs once and only finds the .scoop(s) at that moment
    $('div[data-type="cup"] .scoop').on('click', function () {
        $(this).toggleClass('mint');
    });
};

iceCreamView.handleSurprise = function () {
    // TODO when the button is clicked, randomly color every scoop

    // helper function
    function randomColor () {
        const colors = ['peachpuff', 'lightblue', 'mistyrose', 'salmon', 'honeydew', 'navy', 'red', 'cyan', 'gold', 'orchid'];

        return colors[ Math.floor( Math.random() * colors.length ) ];
    }
};


// TODO call the functions below when the DOM is ready
// greet();

console.log('NOOOOOOOOOOOOOOPE DOM IS NOT READY!');


$(document).ready(function () {
    console.log('DOM IS READY!');
    iceCreamView.init();
    cakeView.init();
});