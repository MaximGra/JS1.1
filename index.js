let n = Math.floor(Math.random() * 1000);
console.log(n);
let i = 1;

while(i > 0){
    let result = prompt("Назовите число :) \nДля выхода нажмите 'q'");

    if (isNaN(result) === false){
        if (result > n){
            alert('Ваше число больше');
        }
        else if (result < n){
            alert('Ваше число меньше');
        }
        else{
            alert('Вы угадали!');
        }
    }
    else if (result === 'q') {
        break;
    }
    else{
        alert('Введите ЧИСЛО')
    }
}