const answerUser = prompt('Сколько будет 7 + 15?');
    switch (answerUser) {
        case '22':
            console.log ('Вы не робот!');
            break;
        default:
            const secondAnswer = prompt('Кажется вы робот..');
            console.log(`Результат: ${secondAnswer === "Я не робот" ? 'Успех' : 'Провал'}`);
            break;

    }