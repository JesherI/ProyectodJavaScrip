const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 200, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 200, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 250, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(270, 130, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 270, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 130, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(270, 270, 50, 0, Math.PI * 2);
ctx.stroke();