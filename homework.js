'use strict'

const { stripLeadingDotSlash } = require("@11ty/eleventy/src/TemplatePath");

function BinarioADecimal(num) {
  // tu codigo aca
  // Una forma asumiendo que recibimos un nùmero
  /* 
var conv = num.toString();
var newString = conv.split("").reverse().join("");
var myDecimal = 0;
for (var i = 0; i < newString.length; i++) {
  if (newString.charAt(i) == "1") {
    myDecimal += Math.pow(2, i);
  }
}
return myDecimal;
}
*/

  // Otra forma de hacerlo si asumimos que erecibimos un número

var suma = 0;
for (let i = 0; i < num.length; i++) {
  suma += Math.pow(2, num.length - (i+1)) * num[i]
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

/* 
var myArray = [];
while (num / 2 >= 1) {
  var cociente = Math.floor(num / 2);
  if (num % 2 == 0) {
    myArray.unshift("0");
  } else {
    myArray.unshift("1");
  }
  if (cociente == 1) {
    myArray.unshift("1");
  }
  num = cociente;
}
return myArray.join('');
}
*/

/**
 * De la siguiente forma parseando 
 */

var myBinary = "";
while (num) {
  myBinary = num % 2 + myBinary;
  num = Math.floor(num / 2);
  }
  return myBinary;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}