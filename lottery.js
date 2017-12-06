// Modern version of the Fisher-Yates shuffle algorithm
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

// Generate Hungarian style lottery numbers
// 1..90 values, 5 numbers draw
function generateLottery() {
    var lotteryArray = [];
    var outputArray  = [];
    for (i = 1; i <= 90; i++) {
        lotteryArray.push(i);
    }
    for (i = 1; i <= 3; i++) {
        shuffle(lotteryArray);
    }
    for (i = 0; i <= 4; i++) {
        outputArray.push(lotteryArray[i]);
    }
    outputArray.sort();
    return outputArray;
}

var lotteryNums = generateLottery().join(', ');

console.log('**************************');
console.log('Lottery draw 90/5');
console.log('**************************');
console.log('Winning numbers:');
console.log(lotteryNums);
console.log('**************************');
