let unidade = prompt("Qual unidade de medida deseja converter? Digite C para Celsius ou F para Fahrenheit:").toUpperCase();

if (unidade === "C") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert("Sua temperatura em Celsius é: " + celsius.toFixed(2) + "°C");
} else if (unidade === "F") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = celsius * 9 / 5 + 32;
    alert("Sua temperatura em Fahrenheit é: " + fahrenheit.toFixed(2) + "°F");
} else {
    alert("Unidade de medida inválida. Por favor, digite C para Celsius ou F para Fahrenheit.");
}