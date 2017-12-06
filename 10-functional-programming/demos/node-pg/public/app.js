'use strict';

pageLoad();

$('#user-form').on('submit', function(e) {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        age: e.target.age.value,
        ninja: e.target.ninja.value
    };

    $.post('/db/person', data)
        .then(function() {
            pageLoad();
        });

});


function pageLoad() {
    $.get('/db/person')
        .then(
            function(data) {
                console.log('this is', data);
                $('#results').empty();

                data.rows.forEach(function(item) {
                    const content = `
                        <h2>${item.name}</h2>
                        <p>age: ${item.age}</p>
                        <p>ninja: ${item.ninja}</p>
                        `;
                    $('#results').append(content);
                });
            },
            function(err) {
                console.error(err);
            }
        );
}
