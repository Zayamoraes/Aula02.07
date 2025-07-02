let idade = Number(prompt("Digite a idade do candidato a presidencia:"));
let idade1 = Number(prompt("Digite a idade do candidato a vice-presidencia:"));
let idade2 = Number(prompt("Digite a idade do  do segundo candidato a presidencia:"));
let idade3 = Number(prompt("Digite a idade do segundo candidato a vice-presidencia:"));
let soma1 = idade + idade1;
let soma2 = idade2 + idade3;
let media1 = soma1 / 2;
let media2 = soma2 / 2;
if (media1 > media2) {
    alert("A chapa 1, tem os candidatos mais velhos, com média de idade de " + media1 + " anos.");
} else if (media1 < media2) {
    alert("A chapa 2, tem os candidatos mais velhos, com média de idade de " + media2 + " anos.");
}