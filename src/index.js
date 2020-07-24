//Declarar variables

let metrosCuadrados;
let tipoInmueble;
let administracion;
let genero;
let edad;
let aseo;
let gimnasio;

//Solicitar información

// metrosCuadrados = parseInt(prompt("Ingrese los metros cuadrados del inmueble"));
// tipoInmueble = prompt("Ingrese el tipo de inmueble (apartamento o casa)");
// genero = prompt(
//   "Por favor seleccione su genero F si es femenino o M si es masculino");
// edad = parseInt(prompt("Por favor ingrese su edad"));


//Declarar funciones

function valorAdministracion(metros, tipo) {
  if (tipo === "casa") {
    console.log("El predio es una casa");
    return metros * 1500 + 100000;
  } else if (tipo === "apartamento") {
    console.log("El predio es un apartamento");
    return metros * 1500 + 50000;
  } else {
   //alert("Has ingresado un dato invalido, gracias por su comprension");
    return 0;
  }
}

function valorAseo(valorAdministracion, metrosCuadrados) {
  let conversion = valorAdministracion * 0.1;
  let conversionMetros = metrosCuadrados * 1000;
  let suma = conversion + conversionMetros;
  return suma;
}

function cuotaGimnasio(genero, edad) {
  if (genero === "M") {
    if (edad < 10 || edad > 60) {
      return 0;
    } else if (edad >= 10 && edad < 20) {
      return 20000;
    } else if (edad >= 20 && edad < 40) {
      return 15000;
    } else if (edad >= 40 && edad < 60) {
      return 10000;
    }
  } else if (genero === "F") {
    if (edad < 10 || edad >= 55) {
      return 0;
    } else if (edad >= 10 && edad < 18) {
      return 15000;
    } else if (edad >= 18 && edad < 35) {
      return 12000;
    } else if (edad >= 35 && edad < 55) {
      return 8000;
    }
  } else {
   // alert("Ingreso un dato incorrecto");
  }
}

//Llamar funciones

administracion = valorAdministracion(metrosCuadrados, tipoInmueble);
console.log("El valor de la administración es de : " + administracion);
aseo = valorAseo(administracion, metrosCuadrados);
console.log(aseo);
gimnasio = cuotaGimnasio(genero, edad);
console.log(`La cuota del gimnasio es ${gimnasio}`);

//Datos para mostrar en el HTML

document.getElementById("valorAdministracion").innerHTML = administracion;
document.getElementById("cuotaAseo").innerHTML = aseo;
document.getElementById("derechoGym").innerHTML = gimnasio;
document.getElementById("total").innerHTML = administracion + aseo + gimnasio;
