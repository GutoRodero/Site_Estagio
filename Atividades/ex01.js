var num1 = 0;

function sendA() {
    var numr10 = 0, numr100 = 0, numr1000 = 0, num1000 = 0;
    num1 = document.getElementById("NA").value;//num1 recebe o valor digitado pelo usuário.


    numr10 = num1 % 10;
    numr100 = ((num1 % 100) - numr10) / 10;
    numr1000 = (((num1 % 1000) - numr100) - numr10) / 100;
    num1000 = num1 / 1000;

    var u = [], d = [], c = [], m = [], r = [];//variáveis de unidade, dezena, centena, milhar e resultado.

    if (numr10 <= 3) {
        for (var i = 1; i <= numr10; i++) {
            u = u + "I";
        }
    } else if (numr10 == 4) {
        u = "IV";
    } else if (numr10 == 5) {
        u = "V";
    } else if ((numr10 >= 6) && (numr10 < 9)) {
        u = "V";
        for (var i = 1; i <= (numr10 - 5); i++) {
            u = u + "I";
        }
    } else if (numr10 == 9) {
        u = "IX";
    }

    if (numr100 <= 3) {

        for (var i = 1; i <= numr100; i++) {
            d = d + "X";
        }
    } else if (numr100 == 4) {
        d = "XL";

    } else if (numr100 == 5) {
        d = "L";
    } else if ((numr100 >= 6) && (numr100 < 9)) {
        d = "L";
        for (var i = 1; i <= (numr100 - 5); i++) {
            d = d + "X";
        }
    } else if (numr100 == 9) {
        d = "XC";
    }

    if (numr1000 <= 3) {
        for (var i = 1; i <= numr1000; i++) {
            c = c + "C";
        }
    } else if (numr1000 == 4) {
        c = "CD";
    } else if (numr1000 == 5) {
        c = "D";
    } else if ((numr1000 >= 6) && (numr1000 < 9)) {
        c = "D";
        for (var i = 1; i <= (numr1000 - 5); i++) {
            c = c + "C";
        }
    } else if (numr1000 == 9) {
        c = "CM";
    }
    if ((num1000 <= 3) && (num1000 > 0)) {
        for (var i = 1; i <= num1000; i++) {//divide o valor por 1000, logo depois, adiciona um M a cada número resultante.
            m = m + "M";
        }
    }
    r = m + c + d + u;//soma todos os valores de milhar, centena, dezena e unidade.
    document.getElementById("resultadoA").innerHTML = r;//retorna o valor resultante das contas.
}

var num = [12, ""];//char com um limite de 12 caracteres.
function sendR() {
    num = document.getElementById("NR").value;//recebe o valor digitado pelo usuário.


    var soma = 0;
    for (var i = 0; i < 12; i++) {
        if (num[i] == 'I') {
            soma = soma + 1;
        } else if (num[i] == 'V') {
            soma = soma + 5;
        } else if (num[i] == 'X') {
            soma = soma + 10;
        } else if (num[i] == 'L') {
            soma = soma + 50;
        } else if (num[i] == 'C') {
            soma = soma + 100;
        } else if (num[i] == 'D') {
            soma = soma + 500;
        } else if (num[i] == 'M') {
            soma = soma + 1000;
        }
    }
    for (var i = 0; i < 12; i++) {
        if ((num[i] == 'I') && (num[i + 1] == 'V')) {
            soma = soma - 2;
        } else if ((num[i] == 'I') && (num[i + 1] == 'X')) {
            soma = soma - 2;
        } else if ((num[i] == 'X') && (num[i + 1] == 'L')) {
            soma = soma - 20;
        } else if ((num[i] == 'X') && (num[i + 1] == 'C')) {
            soma = soma - 20;
        } else if ((num[i] == 'C') && (num[i + 1]) == 'D') {
            soma = soma - 200;
        } else if ((num[i] == 'C') && (num[i + 1]) == 'M') {
            soma = soma - 200;
        }
    }
    document.getElementById("resultadoR").innerHTML = soma;
}