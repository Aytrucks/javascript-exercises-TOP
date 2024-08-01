const getTheTitles = function(books) {
    const titles = books.map((item) =>{
        return item.title;
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
