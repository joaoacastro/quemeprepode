
function calcular(resultado){
    
    var resultado = document.getElementById("numberQuero").value;
    var resultado2 = document.getElementById("numberMereco").value;
    var resultado3 = document.getElementById("numberPreciso").value;
    var resultado4 = document.getElementById("numberPosso").value;
    var resultado5 = document.getElementById("numberDevo").value;

    if (resultado == 1 && resultado2 == 1 && resultado3 == 1 && resultado4 == 1 && resultado5 == 1){
        paragraphResult.innerHTML = "Compre!"
    } else {
        paragraphResult.innerHTML = "Não Compre!"
    }
}