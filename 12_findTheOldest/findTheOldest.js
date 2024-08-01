const findTheOldest = function(array) {
    const today = new Date();
    const sorted = array.sort((a,b) => {
       if(!a.yearOfDeath){
        a.yearOfDeath = today.getFullYear();
       }
       if(!b.yearOfDeath){
        b.yearOfDeath = today.getFullYear();
       }
        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1
    });
    console.log(sorted);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
