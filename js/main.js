// FUNCIÓN CONSTRUCTORA DE OBJETOS
function Ingresos (mes, ingreso) {
    this.mes = mes;
    this.ingreso = ingreso;
}

// ARRAY QUE CONTIENE LOS OBJETOS
const ingresosAnuales = [];
const mesesMuestra = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const muestraIngresos = document.getElementsByClassName("muestraIngresos");

//PRUEBA DOM!
let botonContinuar = document.getElementById ("boton");
botonContinuar.addEventListener("click", validarFormulario);

let mes = document.getElementById ("mes");
let p = 0;
let y = 0;
mes.value = mesesMuestra [p];

function validarFormulario (e){
    let formulario = document.getElementById("formulario");
    e.preventDefault();

    let entradaIngreso = document.getElementById ("ingreso").value;

    console.log (`INGRESO: ${entradaIngreso}`);
    ingresosAnuales.push (parseInt(entradaIngreso));

    p++;
    mes.value = mesesMuestra [p];

    muestraIngresos[y].textContent = entradaIngreso;
    y++;

    console.log (ingresosAnuales);
    let lenght = ingresosAnuales.length;
    if (lenght == 12) {
    operaciones ();
}
}

// SUMA DE INGRESOS
function operaciones () {
    console.log (ingresosAnuales);
    const sumaAnual = ingresosAnuales.reduce ((prev, curr) => prev + curr, 0); 

// MÁXIMO Y MÍNIMO
    ingresosAnuales.sort ((a, b) => a - b );

    let ingresoTotal = document.getElementById ("ingresoTotal");
    let ingresoMinimo = document.getElementById ("ingresoMinimo");
    let ingresoMaximo = document.getElementById ("ingresoMaximo");

    ingresoTotal.textContent = sumaAnual;
    ingresoMinimo.textContent = ingresosAnuales[0];
    ingresoMaximo.textContent = ingresosAnuales[11];

    correspondeIRPF (sumaAnual);
}

// CORRESPONDE IRPF
let muestraLiquido = document.getElementById ("muestraLiquido");
let mensajeCorresponde = document.getElementById ("mensajeCorresponde");
let ingresoLiquido = 0;

const correspondeIRPF = sumaAnual => {
    if (sumaAnual < 10500) {
        muestraLiquido.textContent = sumaAnual;
        mensajeCorresponde.textContent = `Su ingreso anual no estará gravado por el impuesto IRPF.`
    }
    else if (sumaAnual < 15000) {
        ingresoLiquido = (sumaAnual * 0.90);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 10%`;
    }
    else if (sumaAnual < 24000) {
        ingresoLiquido = (sumaAnual * 0.85);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 15%`;
    }
    else if (sumaAnual < 45600) {
        ingresoLiquido = (sumaAnual * 0.76);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 24%`;
    }
    else if (sumaAnual < 76800) {
        ingresoLiquido = (sumaAnual * 0.75);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 25%`;
    }
    else if (sumaAnual < 108000) {
        ingresoLiquido = (sumaAnual * 0.73);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 27%`;
    }
    else if (sumaAnual < 174000) {
        ingresoLiquido = (sumaAnual * 0.69);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 31%`;
    }
    else {
        ingresoLiquido = (sumaAnual * 0,64);
        muestraLiquido.textContent = ingresoLiquido;
        mensajeCorresponde.textContent = `Su ingreso anual estará gravado por el impuesto IRPF en un 36%`;
    }
}