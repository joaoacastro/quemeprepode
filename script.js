function proximo(id){
    if (document.getElementById(id).style.display == 'block'){
    /* document.getElementById(id).style.display = 'none'; */
    } else {
        document.getElementById(id).style.display = 'block';
    }
}

function calcular(){
    let inputQuero = document.querySelector(".inputQuero:checked").value;
    let inputMereco = document.querySelector(".inputMereco:checked").value;
    let inputPreciso = document.querySelector(".inputPreciso:checked").value;
    let inputPosso = document.querySelector(".inputPosso:checked").value;
    let inputDevo = document.querySelector(".inputDevo:checked").value;

    if (inputQuero == "Sim" && inputMereco == "Sim" && inputPreciso == "Sim" && inputPosso == "Sim" && inputDevo == "Sim"){
        paragraphResult.innerHTML = "Baseado nas suas respostas, você pode comprar este ítem que tanto deseja."
    } else {
        paragraphResult.innerHTML = "Baseado nas suas respostas, parece que este ítem não é tão necessário assim, vá dar uma volta que já já a vontade de comprar passa."
    }
}
