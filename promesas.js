const names = ["Frank", "Peter", "John", "Bruce"]

const getNamesPromise = (valor) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            console.log('Ejecuta promesa');
            if (valor) {
                resolve(names);
            } else {
                reject(new Error('Falló!!'));
            }
        }, 1000)
    }
)

// console.log(getNamesPromise);

console.log('Inicia petición')
getNamesPromise(1).then(
    (datos) => {
        console.log(datos);
        console.log('Finaliza petición')
    }
)
.catch(error => console.log(error))
console.log('Continua ejecución')