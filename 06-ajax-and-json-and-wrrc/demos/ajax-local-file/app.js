'use strict';

function Person (dataObj) {
    this.name = dataObj.name;
    this.job = dataObj.job;
    this.dreamJob = dataObj.dreamJob;
}

// attach a class property "all" to the Person class, instead of using a global var
// const allPeople = [];
Person.all = [];

Person.prototype.toHtml = function () {
    return `<h1>${this.name} wishes they were a <span class="dream">${this.dreamJob}<span></h1>`;
};

// adding two class methods - these *won't* be on each instance of a Person
Person.loadAll = dataObjs => {
    dataObjs.forEach(personObj => Person.all.push(new Person(personObj)));
    Person.all.forEach(person => $('#people').append(person.toHtml()));
};

Person.fetchAll = () => {

    // $.ajax({
    //     method: 'GET',
    //     url: 'data.json',
    //     success: (monkeys) => {
    //         console.log(monkeys);
    //     },
    //     error: (res,status,err) => {
    //         console.error(' ajax FAIL',status, err);
    //     }
    // });

    // $.get('data.json')
    //     .done(res => console.log(res))
    //     .fail((res, status, err) => console.error(err));

    // TODO instead of using peopleData, make an AJAX request to get the JSON data
    $.getJSON('data.json')
        .done(jsonData => { 
            // is asynchronous!
            // will run when the browser receives the server's response
            Person.loadAll(jsonData);
        })
        .fail((res, status, err) => console.error(err));
};






