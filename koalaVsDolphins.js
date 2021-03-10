const koalasAvg = [65, 54, 49]
const dolphinsAvg = [44, 23, 71]

const calcAverage = avg => {
    const averageScore = avg.reduce((a, b) => a + b) / avg.length
    return averageScore
}

const checkWinner = function(koalas, dolphins) {
    if (koalas > (dolphins * 2)) {
        console.log(`Koalas win ${(koalas)}, ${dolphins}`)
    } else {
        console.log(`Dolphins win ${(dolphins)}, ${koalas}`);
    }
}



console.log(checkWinner(calcAverage(koalasAvg), calcAverage(dolphinsAvg))) // dolphins
console.log(calcAverage(koalasAvg)) // koalas