console.log(sayAgeTwo('Matt', 25));


var marksAge = sayAgeTwo('Mark, 55');

consle.log(marksAge);


function sayAge(name, age){
    return name + ' is ' + age + ' years old.';
}

//or

function sayAgeTwo(name, age){
    var results = name + ' is ' + age + ' years old.';

    return results;
}
