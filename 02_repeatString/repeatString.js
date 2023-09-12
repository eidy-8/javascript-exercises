function repeatString(str, times) {
    if (times < 0) return "ERROR";
    return str.repeat(times);
}

const repeated = repeatString('hey', -1);

// Do not edit below this line
module.exports = repeatString;
