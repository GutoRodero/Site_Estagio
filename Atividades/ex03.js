// function calcular() {
//     var numc = 0, nump = 0, qtd = 0;
//     var nomep = 0;
//     var precop = 0.0;

//     numc = document.getElementById("numc").value;

//     function clientes(nome, soma) {
//         var nome = "";
//         var soma = 0.0;
//     };
//     clientes[numc];

//     clientes[i] = document.getElementById("nomec").value;

//     var nome = "";

//     nomep = document.getElementById("nomep").value;

//     precop = document.getElementById("precop").value;

//     qtd = document.getElementById("qtd").value;

//     for (var i = 0; i < nump; i++) {
//         nome = document.getElementById("nome").value;
//         for (var i = 0; i < numc; i++) {
//             if (clientes[i].nome == nome) {
//                 clientes[i].soma = clientes[i].soma + (precop * qtd / nump);
//             }
//         }
//     }

//     for (var i = 0; i < numc; i++) {
//         document.getElementById("resultadon").innerHTML = clientes[i].nome;
//         document.getElementById("resultados").innerHTML = clientes[i].soma;
//     }
// }
function armazenar() {
    var nomec = document.getElementById("nomec").value;
    document.getElementById("rnomec").innerHTML = nomec
}
var rpreco = 0;
function calcular() {
    var qnt = 0, precop = 0, qntc = 0;

    qnt = document.getElementById("qnt").value;
    precop = document.getElementById("precop").value;
    qntc = document.getElementById("qntc").value;



    rpreco = ((qnt * precop) / qntc) + rpreco;
    document.getElementById("rpreco").innerHTML = rpreco;
}
function reset(){
    rpreco=0;
    nomec="";
    document.getElementById("rpreco").innerHTML = null;
    document.getElementById("rnomec").innerHTML = "";
}