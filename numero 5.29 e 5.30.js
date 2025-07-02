let numero = Number(prompt("Digite um número:"));
let impar = numero % 2 !== 1;
let par = numero % 2 === 1;
if (numero > 0) {
    alert("O número " + numero + " é positivo e " + (impar ? "ímpar." : "par."));
} else if (numero < 0) {
    alert("O número " + numero + " é negativo e " + (par ? "par." : "ímpar."));
} else {
    alert("O número " + numero + " é nulo.");
}