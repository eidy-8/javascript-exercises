function removeFromArray(msg) {
    msg.splice(2,1);
    return msg
};

removeFromArray([1, 2, 3]);

// Do not edit below this line
module.exports = removeFromArray;
