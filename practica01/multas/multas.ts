type EstadoPrestamo = 'activo' | 'vencido' | 'devuelto';

interface Prestamo{
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string;
}

function calcularMulta(prestamo: Prestamo){
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

function reciboDe(prestamo: Prestamo): string {
    if (prestamo.socio === undefined){
        return `Recibo de socio no registrado`;
    }
    return `Recibo de ${prestamo.socio}`;
}

const prestamo: Prestamo = { 
    folio: "F001",
    multa: 350, 
    ejemplar: 14,
    estado: 'vencido',
    socio: "Juan Pérez"
};

console.log(calcularMulta(prestamo));
console.log(reciboDe(prestamo));

// Error 1: Propiedades faltantes
const prestamoDos = { folio: "F002", multa: 250, ejemplar: 15};
calcularMulta(prestamoDos);

// Error 2: Estado inexistente o inválido
prestamo.estado = 'caducado';

// Error 3: Utilizar un objeto que no es Prestamo
const pago = { cantidad: 10000, moneda: "dólar"};
calcularMulta(pago);