const removeFromArray = function(list, ...toRemove) {
    let filteredList = list.filter(remove => !toRemove.includes(remove));

    return filteredList;
};

// Do not edit below this line
module.exports = removeFromArray;