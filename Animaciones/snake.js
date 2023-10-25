const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const resultado = document.querySelector('span');

let direction = 1;

contador = 0;
resultado.innerHTML=contador;


const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});

snake.push({
    x: 1,
    y: 1,
    xNext: snake[0].x,
    yNext: snake[0].y,
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});

snake.push({
    x: 0,
    y: 1,
    xNext: snake[1].x,
    yNext: snake[1].y,
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});

const comida = {
    x: 0,
    y: 0,
    aparece: function () {
        this.x = Math.floor(Math.random() * 20);
        this.y = Math.floor(Math.random() * 20);
    },
    pinta: function () {
        ctx.font = '25px Serif';
        ctx.fillText('🍕', this.x * 20, this.y * 20);

    }
}

let posInitX = 2;
let posInitY = 1;

function nextMove() {
    snake.forEach((cuadrito, index) => {
        if (index === 0) {
            cuadrito.x = posInitX;
            cuadrito.y = posInitY;
        } else {
            cuadrito.x = cuadrito.xNext;
            cuadrito.y = cuadrito.yNext;
            cuadrito.xNext = snake[index - 1].x;
            cuadrito.yNext = snake[index - 1].y;
        }
    })
}

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    snake.forEach(cuadrito => cuadrito.pinta());
    if (snake[0].x === comida.x && snake[0].y === comida.y) {
        comida.aparece();
        const newCuadro = { ...snake[0] };
        newCuadro.x = comida.x;
        newCuadro.y = comida.y;
        snake.push(newCuadro);
        contador++;
        resultado.innerHTML=contador;
    }

    comida.pinta();
    switch (direction) {
        case 1:
            posInitX++;
            break;
        case 2:
            posInitY++;
            break;
        case 3:
            posInitX--;
            break;
        case 4:
            posInitY--;
    }
    if (posInitX > 29) posInitX = 0;
    if (posInitY > 20) posInitY = 0;
    if (posInitX < 0) posInitX = 29;
    if (posInitY < 0) posInitY = 20;
    nextMove();
}, 100)

document.querySelector('body')
    .addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowUp':
                direction = 4;
                break;
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowDown':
                direction = 2
                break;
        }
    });