function logName (userName, userSurname){ ;
     console.log(`Имя - ${userName}, Фамилия - ${userSurname} `);
}

logName ('Димон', 'Василич');


function countDepositSum (depositInUSD, month, rate) {

     const sum = depositInUSD * (1 + rate / 12)**month; //можно сразу вместо конста писать ретёрн =
     return sum;

}

const examlpe1 = countDepositSum(1000, 54, 0.12);
console.log (examlpe1);

console.log (countDepositSum(1000,22,0.14));