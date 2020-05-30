function calcular(){
    var inputQuero = document.querySelector(".inputQuero:checked").value;
    var inputMereco = document.querySelector(".inputQuero:checked").value;
    var inputPreciso = document.querySelector(".inputQuero:checked").value;
    var inputPosso = document.querySelector(".inputQuero:checked").value;
    var inputDevo = document.querySelector(".inputQuero:checked").value;

    if (inputQuero == "Sim" && inputMereco == "Sim" && inputPreciso == "Sim" && inputPosso == "Sim" && inputDevo == "Sim"){
        paragraphResult.innerHTML = "Baseado nas suas respostas, você pode comprar este ítem que tanto deseja."
    } else {
        paragraphResult.innerHTML = "Baseado nas suas respostas, parece que este ítem não é tão necessário, vá dar uma volta que já já a vontade de comprar passa."
    }
}
