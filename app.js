const tasks = ['Задача 1', 'Anal1'];


function AddTask (nameTask) {
    tasks.push(nameTask);
    return console.log(tasks);
}

function DeleteTask (nameTask){
    index = tasks.indexOf(nameTask);
    tasks.splice(index, 1);
    console.log(tasks);
}

function ChangeIndex (nameTask) {
    index = tasks.indexOf(nameTask);
    spliced = tasks.splice(index, 1);
    tasks.unshift(spliced);
    console.log(tasks);
}

ChangeIndex('Anal1');