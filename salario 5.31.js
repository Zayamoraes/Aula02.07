let salario = Number(prompt("Digite o valor do salário:"));
let emprestimo = Number(prompt("Digite o valor do empréstimo:"));
let limite = salario * 0.3;
if (emprestimo <= limite) {
    alert("Empréstimo aprovado! O valor do empréstimo é " + emprestimo + " e o limite é " + limite + ".");
} else if (emprestimo > limite) {
    alert("Empréstimo não aprovado! O valor do empréstimo é " + emprestimo + " e o limite é " + limite + ".");
} else if (salario <= 0) {
    alert("Valor inválido! O valor do salário deve ser um número positivo.");
}