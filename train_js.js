function greeting() {
    let name = prompt('Назовите свое имя?');
    let surname = prompt('А теперь фамилию?');
    alert('Привет, ' + name + ' ' + surname + '!');
}

function degrees() {
    let C = prompt('Введите количество градусов по Цельсию');
    let F = (C * 9 / 5) + 32;
    alert(F);
}

function formula() {
    let x = prompt('Введите значение х');
    let y = (4 * Math.pow(x, 2) + 18 - 23 * x)/(5 / 9 * x + 18 * (Math.pow(x, 3) / 33) * x) + x * 15 / 12;
    alert(y);
}

