const form = document.querySelector("#form")
const campoA = document.querySelector("#campo-a")
const campoB = document.querySelector("#campo-b")

form.addEventListener("submit", (event) => {
    if(campoA.value > campoB.value){
        alert("Erro: O número digitado é inválido");
        return;
    }else{
        alert("Ótimo, o número digitado é válido!")
    }
})