const lowestIndex = (magic, dist) => {
    let lowestTripIndex = magic[0]
    const distance = magic.reduce((netDistance, v, i) => {
        const score = netDistance + v - dist[i];
        if (score < lowestTripIndex) lowestTripIndex = i;
        return score;
    }, 0);

    return distance < 0 ? -1 : lowestTripIndex
}

module.exports = lowestIndex