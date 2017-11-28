//                                                                  ARROW FUNCTIONS

function rain () {
    console.log('`');
}

rain();

let rainMore = function () {
    console.log('`');
    console.log('`');   
};

rainMore();

let sunshine = (time,degree) => {
    console.log(time, degree);
};

sunshine('5pm',30);

let storm = () => {
    for (let i = 0; i < 20; i++ ) {
        console.log('`');        
    }
};



let plants = ['spider','moses','ivy'];

plants.forEach(function(plant){
    console.log('using regular function:', plant);
    console.log('THIS IS:', this );
});

// plants.forEach((plant) => { console.log('using full punctuation arrow', plant); });
// plants.forEach(plant => { console.log('using no () arrow',plant); });
// plants.forEach( plant => console.log('using no punctuation arrow', plant) );

plants.forEach((plant) => { 
    console.log('using full punctuation arrow', plant); 
    console.log('THIS IS:', this);
});

console.log('THIS IS', this); // this === WINDOW

const codeSchool = {
    students: ['bob','jean','louis'],
    classes: ['flute','flambe','improv'],
    addStudent: function (name) {
        console.log('THIS IS', this); // this === codeSchool
        this.students.push(name);
    },
    addClass: className => {
        console.log('THIS IS', this); // this === WINDOW
        this.classes.push(className);
    }
};













//                                                                  USING HANDLEBARSJS TEMPLATES
const pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.sound = petData.sound;
    this.description = petData.description;
    this.image = petData.image;
}

Pet.prototype.toHtml = function () {
    // get the template to use
    const petTemplate = $('#pet-template').html();
    /*
      <h2>{{name}}</h2>
      <h3>{{type}}</h3>
      <p>{{description}}</p>
      <img src='{{image}}'>
      {{imgTag}}
    */

    // compile the template into a JS function
    const templateFiller = Handlebars.compile(petTemplate);

    // const filledTemplate = templateFiller({name:'Louis', type:'DOGE',description:'cute'});
    const filledTemplate = templateFiller(this);

    return filledTemplate;

    // use that function to create a filled in template

    // TODO use Handlebars to compile our HTML template instead of cloning it w jQuery
    // const $newPet = $( 'article.template' ).clone().removeClass( 'template' );
    // $newPet.find( 'h2' ).text( this.name );
    // $newPet.find( 'p' ).text( this.description );
    // $newPet.find( 'img' ).attr( 'src', this.image );

    // return $newPet;
};

function populatePets () {
   
    // loops through array of pet DATA and creates pet OBJECTS
    petObjects.forEach( pet => {
        pets.push( new Pet( pet ) );
    });
    
    // loops through array of pet OBJECTS and runs .toHTML()
    pets.forEach( pet => {
        $( '#pets' ).append( pet.toHtml() );
    });

}

$( document ).ready( function () {
    populatePets();
});