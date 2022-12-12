let botao = document.querySelector('#botao')
botao.addEventListener('click', mostrarIMC)

function mostrarIMC() {
    let DadosPaulo = {
        pesoKilos: document.querySelectorAll('.info-peso')[0].innerHTML,
        alturaMetros: document.querySelectorAll('.info-altura')[0].innerHTML,
    }    
    calcularImcDoPaulo(DadosPaulo)
    
    let DadosJoão = {
        pesoKilos: document.querySelectorAll('.info-peso')[1].innerHTML,
        alturaMetros: document.querySelectorAll('.info-altura')[1].innerHTML,
    }    
    calcularImcDoJoão(DadosJoão)

    let DadosErica = {
        pesoKilos: document.querySelectorAll('.info-peso')[2].innerHTML,
        alturaMetros: document.querySelectorAll('.info-altura')[2].innerHTML,
    }    
    calcularImcDaErica(DadosErica)

    let DadosDouglas = {
        pesoKilos: document.querySelectorAll('.info-peso')[3].innerHTML,
        alturaMetros: document.querySelectorAll('.info-altura')[3].innerHTML,
    }    
    calcularImcDoDouglas(DadosDouglas)

    let DadosTatiana = {
        pesoKilos: document.querySelectorAll('.info-peso')[4].innerHTML,
        alturaMetros: document.querySelectorAll('.info-altura')[4].innerHTML,
    }    
    calcularImcDaTatiana(DadosTatiana)
    
    botao.remove()
}


function calcularImcDoPaulo(DadosPaulo) {
    let calcularIMC =  DadosPaulo.pesoKilos / (DadosPaulo.alturaMetros ** 2)
    let tdImc = document.querySelectorAll('.imc')[0]
    let resultadoDoIMC = document.createTextNode(`${calcularIMC.toFixed(2)}`)
    tdImc.appendChild(resultadoDoIMC)
}

function calcularImcDoJoão(DadosJoão) {
    let calcularIMC = DadosJoão.pesoKilos / (DadosJoão.alturaMetros ** 2)
    let tdImc = document.querySelectorAll('.imc')[1]
    let resultadoDoIMC = document.createTextNode(`${calcularIMC.toFixed(2)}`)
    tdImc.appendChild(resultadoDoIMC)
}

function calcularImcDaErica(DadosErica) {
    let calcularIMC = DadosErica.pesoKilos / (DadosErica.alturaMetros ** 2)
    let tdImc = document.querySelectorAll('.imc')[2]
    let resultadoDoIMC = document.createTextNode(`${calcularIMC.toFixed(2)}`)
    tdImc.appendChild(resultadoDoIMC)
}

function calcularImcDoDouglas(DadosDouglas) {
    let calcularIMC = DadosDouglas.pesoKilos / (DadosDouglas.alturaMetros ** 2)
    let tdImc = document.querySelectorAll('.imc')[3]
    let resultadoDoIMC = document.createTextNode(`${calcularIMC.toFixed(2)}`)
    tdImc.appendChild(resultadoDoIMC)
}

function calcularImcDaTatiana(DadosTatiana) {
    let calcularIMC =  DadosTatiana.pesoKilos / (DadosTatiana.alturaMetros ** 2)
    let tdImc = document.querySelectorAll('.imc')[4]
    let resultadoDoIMC = document.createTextNode(`${calcularIMC.toFixed(2)}`)
    tdImc.appendChild(resultadoDoIMC)
}


