const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath')) {
            person['age'] = person.yearOfDeath - person.yearOfBirth
        } else {
            person['age'] = currentYear - person.yearOfBirth
        };
    });
    people.sort((p1, p2) => (p1.age < p2.age) ? 1 : (p1.age > p2.age) ? -1 : 0)

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
