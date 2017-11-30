'use strict';

function Person (dataObj) {
    this.name = dataObj.name;
    this.job = dataObj.job;
    this.dreamJob = dataObj.dreamJob;
}

Person.all = [];

Person.prototype.toHtml = function () {
    return `<h1>${this.name} wishes they were a <span class="dream">${this.dreamJob}<span></h1>`;
};

Person.loadAll = dataObjs => {
    dataObjs.forEach(personObj => Person.all.push(new Person(personObj)));
    Person.all.forEach(person => $('#people').append(person.toHtml()));
};

Person.fetchAll = () => {
    Person.loadAll(peopleData);

    // TODO instead of using peopleData, make an AJAX request to get the JSON data
};




