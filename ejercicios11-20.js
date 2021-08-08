// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numerofactorial) => {
  if (typeof numerofactorial === "number") {
    for (let counter = numerofactorial - 1; counter > 0; counter--) {
      numerofactorial = numerofactorial * counter;
    }
    console.log(numerofactorial);
  } else {
    console.warn("Por favor, ingresa un número");
  }
};

//factorial(6);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (ispar) => {
  if (typeof ispar === "number") {
    let resultado = ispar % 2;
    resultado === 0
      ? console.log("El número es par.")
      : console.log("El número es impar.");
  } else {
    console.warn("Solo se permiten números");
  }
};

//parImpar(2);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convGrads = (grados, tipo) => {
  if (typeof grados === "number") {
    if (tipo === "C") {
      let fahrenheit = (grados * 9) / 5 + 32;
      console.log(`${fahrenheit} grados Farenheit`);
    } else if (tipo === "F") {
      let celsius = ((grados - 32) * 5) / 9;
      console.log(`${celsius} grados Celsius`);
    } else {
      console.warn("Debes especificar C (celsius) o F (farenheit)");
    }
  } else {
    console.warn("Solo se permiten números");
  }
};

//convGrads(20, "C");

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (cantidad, desc) => {
  if (typeof cantidad === "number" && typeof desc === "number") {
    descToApply = (cantidad / 100) * desc;
    descApplied = cantidad - descToApply;
    console.log(descApplied);
  } else {
    console.warn("Datos erróneos");
  }
};

//descuento(1000, 50);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
