const findTheOldest = function(people) {
    let oldestAge = 0
    let oldestPerson
    for (person in people) {
        if (people[person].yearOfDeath === undefined) {
            people[person].yearOfDeath = new Date().getFullYear()
        } if ((people[person].yearOfDeath - people[person].yearOfBirth) > oldestAge) {
            oldestAge = (people[person].yearOfDeath - people[person].yearOfBirth)
            oldestPerson = people[person]
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
