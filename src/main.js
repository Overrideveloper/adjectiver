const adjectivePool = require('./dictionary').adjectives;

function getAdjective(noun) {
    if (typeof noun !== "string") throw new TypeError("parameter 'noun' should be a string");
    const letter = noun.charAt(0).toLowerCase();
    const adjArray = adjectivePool[letter];
    const adjective = adjArray[Math.floor(Math.random() * adjArray.length)];
    return adjective.charAt(0).toUpperCase() + adjective.slice(1);
}

function getAdjectives(count, noun) {
    if (typeof count !== "number") throw new TypeError("parameter 'count' should be a number");
    if (typeof noun !== "string") throw new TypeError("parameter 'noun' should be a string");

    const adjectives = [];
    let result = [];
    for (let i = 0; i < count; i++ ) {
        const adj = getAdjective(noun);
        adjectives.push(adj);
        if (i === count - 1) {
            result = adjectives;
        }
    }
    return result;
}

module.exports = {
    getAdjectives: getAdjectives,
    getAdjective: getAdjective
}