//                                                                  ARROW FUNCTIONS






//                                                                  USING HANDLEBARSJS TEMPLATES
const pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
    this.image = petData.image;
}

Pet.prototype.toHtml = function () {
    // TODO use Handlebars to compile our HTML template instead of cloning it w jQuery
    var $newPet = $( 'article.template' ).clone().removeClass( 'template' );
    $newPet.find( 'h2' ).text( this.name );
    $newPet.find( 'p' ).text( this.description );
    $newPet.find( 'img' ).attr( 'src', this.image );

    return $newPet;
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