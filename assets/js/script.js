console.log("calculando orçamento")

document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    
    let preco = qtde.value * 10
    if (js.checked) preco *= 1.2
    if(layout_sim.checked) preco +=100

    let taxaDeUrgencia = preco * (1.2 + prazo.value * 0.3)
    preco += taxaDeUrgencia

    label_prazo.innerHTML = `Horas Por Dia (${prazo.value} Horas)`
    
    output.innerHTML = `R$  ${preco.toFixed(2)}`

}

//manipulação do DOM

//ECMAScript