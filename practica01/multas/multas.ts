interface Prestamo{
    multa: number;
    ejemplar: number;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

// const prestamo = { multa: '350', ejemplar: 14 };

// console.log(calcularMulta(prestamo));

const cargo = 50;
cargo = 60;

let intentos = 0;
intentos = 3;
intentos = "3";

const p = { multa: 350}
p.multa = 400;
p = { multa: 400};