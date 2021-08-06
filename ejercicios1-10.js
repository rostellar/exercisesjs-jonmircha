// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCaracteres = (cadena1) => {
  if (typeof cadena1 === "string") {
    console.log(cadena1.length);
  } else {
    console.warn("Debes ingresar una cadena de texto");
  }
};

//contarCaracteres('Hello world');

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const textoRecortado = (cadena2, trozo = 0) => {
  if (typeof cadena2 === "string" && typeof trozo === "number") {
    console.log(cadena2.slice(0, trozo));
  } else {
    console.warn("Datos erróneos");
  }
};

//textoRecortado('Hello world', 5);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const textoSeparado = (cadena3) => {
  if (typeof cadena3 === "string") {
    console.log(cadena3.split(" "));
  } else {
    console.warn("Debes ingresar una cadena de texto.");
  }
};

//textoSeparado("Hello world, this is a test")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (cadena4, repeticiones) => {
  if (typeof cadena4 === "string" && typeof repeticiones === "number") {
    for (let i = 0; i < repeticiones; i++) {
      console.log(cadena4);
    }
  } else {
    console.warn("Datos erróneos");
  }
};

//repetirTexto('Hello world', 2)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena5) => {
  if (typeof cadena5 === "string") {
    let cadenaInvertida = cadena5.split("").reverse().join("");
    console.log(cadenaInvertida);
  } else {
    console.warn("Debes ingresar una cadena de texto.");
  }
};

//invertirCadena("Hello world")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarRepetido = (cadena6, palabra) => {
  if (typeof cadena6 === "string" && typeof palabra === "string") {
    let cadenaSplitted = cadena6.split(" ");
    let contador = 0;
    cadenaSplitted.forEach((element) => {
      element === palabra ? (contador += 1) : (contador += 0);
    });
    console.log(contador);
  } else {
    console.warn("Solo se permiten textos");
  }
};

//contarRepetido("hola mundo mundo mundo","mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (cadena7) => {
  if (typeof cadena7 === "string") {
    let cadenaLowerCase = cadena7.replace(/ /g, "").toLowerCase().split("");
    let cadena7noSpace = cadenaLowerCase.join("");
    let cadenaSplit = cadenaLowerCase.reverse().join("");

    cadenaSplit === cadena7noSpace
      ? console.log("Es un palíndromo")
      : console.log("No es un palíndromo");
  } else {
    console.warn("Debes ingresar una cadena de texto.");
  }
};

//palindromo("Amo la paloma")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminaPatrones = (texto, eliminar) => {
  if (typeof texto === "string") {
    let re = RegExp(eliminar, "g");
    let clear = texto.replace(re, "");
    console.log(clear);
  } else {
    console.warn("Debes ingresar un texto y un patrón a eliminar.");
  }
};

//eliminaPatrones("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randNum = () => {
  console.log(Math.random() + 501);
};
//randNum()

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numCapicua) => {
  if (typeof numCapicua === "number") {
    let numCapicuaStr = numCapicua.toString();
    let numCapicuaStrSplit = numCapicuaStr.split("");
    let numCapicuaReverse = numCapicuaStrSplit.reverse();
    let numCapicuaJoin = numCapicuaReverse.join("");

    numCapicuaJoin === numCapicuaStr
      ? console.log("El número es capicua")
      : console.log("El número no es capicua");
  } else {
    console.warn("Debes ingresar un número.");
  }
};

//capicua(404);
