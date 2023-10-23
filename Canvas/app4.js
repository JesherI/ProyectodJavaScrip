const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(150, 150, 75, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.ellipse(250, 150, 30, 50, 0, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(250, 150, 15, 25, 0, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(160, 120, 15, 25, -4, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(180, 100, 10, 20, -4, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(175, 100, 5, 10, -4, 0, Math.PI * 2);
ctx.fill();


ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(150, 120, 8, 15, -4, 0, Math.PI * 2);
ctx.fill();


ctx.fillStyle = 'darkgreen';
ctx.beginPath();
ctx.ellipse(130, 220, 10, 20, 5, 0, Math.PI * 2);
ctx.fill();
