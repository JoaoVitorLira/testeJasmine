// AQUI FICA O CÓDIGO-FONTE

// Função exemplo 1
function inteiro(inteiro) {
    if (inteiro % 3 == 0) {
        return 'Fizz';
    }
    if (inteiro == 5) {
        return 'Buzz';
    }
    return inteiro;
}

// Função exemplo 2
function escola(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Exercício 1
function multiplicarTresNumeros(a, b, c) {
    return a * b * c;
}

// Exercício 2
function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por 0";
    }
    return a / b;
}

// Exercício 3
function celsiusFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// Exercício 4
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

// Exercício 5
function contarCaracteres(str) {
    return str.length;
}

// Exercício 6
function calculadora(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0 ? "Não é possível dividir por 0" : a / b;
        default:
            return "Operador inválido";
    }
}

