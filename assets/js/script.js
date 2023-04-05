console.log("calculando orçamento")

document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    let qtde = document.querySelector("#qtde").value
    let preco = qtde * 100

    let js = document.querySelector("#js").checked
    if (js) preco *= 1.1

    let layout = document.querySelector("#layout_sim").checked
    if(layout) preco +=500
    
    document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)

}

//manipulação do DOM

//ECMAScript