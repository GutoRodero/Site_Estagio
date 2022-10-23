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