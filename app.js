const balance = 1114;
const bonusBalance = 1230;
const isBanned = false;
const isExist = false;
const isSelling = true;
let message = '';

let balanceReady;
((balance > 1000) || (bonusBalance > 100)) ? balanceReady = true 
    : balanceReady = false;

if ((balanceReady === true) && (isBanned == false) && (isExist == false) && (isSelling === true)) {
     message = 'Успешная покупка';
} else {

     message = 'Не получилось купить';

}

console.log (`Итог: ${message}`);

