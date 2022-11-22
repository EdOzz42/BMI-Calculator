let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    //Paulo
    let pesoKgSelec0 = document.querySelectorAll('.info-peso')[0].innerHTML
    let alturaMSelec0 = document.querySelectorAll('.info-altura')[0].innerHTML
    let kg0 = +pesoKgSelec0
    let metros0 = +alturaMSelec0
    let calIMC0 =  kg0 / (metros0 ** 2)
    let tr0 = document.querySelectorAll('.paciente')[0]
    let td0 = document.querySelectorAll('.imc')[0]
    let resIMC0 = document.createTextNode(`${calIMC0.toFixed(2)}`)

    tr0.appendChild(td0)
    td0.appendChild(resIMC0)

    //João
    let pesoKgSelec1 = document.querySelectorAll('.info-peso')[1].innerHTML
    let alturaMSelec1 = document.querySelectorAll('.info-altura')[1].innerHTML
    let kg1 = +pesoKgSelec1
    let metros1 = +alturaMSelec1
    let calIMC1 =  kg1 / (metros1 ** 2)
    let tr1 = document.querySelectorAll('.paciente')[1]
    let td1 = document.querySelectorAll('.imc')[1]
    let resIMC1 = document.createTextNode(`${calIMC1.toFixed(2)}`)

    tr1.appendChild(td1)
    td1.appendChild(resIMC1)
    
    //Erica
    let pesoKgSelec2 = document.querySelectorAll('.info-peso')[2].innerHTML
    let alturaMSelec2 = document.querySelectorAll('.info-altura')[2].innerHTML
    let kg2 = +pesoKgSelec2
    let metros2 = +alturaMSelec2
    let calIMC2 =  kg2 / (metros2 ** 2)
    let tr2 = document.querySelectorAll('.paciente')[2]
    let td2 = document.querySelectorAll('.imc')[2]
    let resIMC2 = document.createTextNode(`${calIMC2.toFixed(2)}`)

    tr2.appendChild(td2)
    td2.appendChild(resIMC2)
    
    //Douglas
    let pesoKgSelec3 = document.querySelectorAll('.info-peso')[3].innerHTML
    let alturaMSelec3 = document.querySelectorAll('.info-altura')[3].innerHTML
    let kg3 = +pesoKgSelec3
    let metros3 = +alturaMSelec3
    let calIMC3 =  kg3 / (metros3 ** 2)
    let tr3 = document.querySelectorAll('.paciente')[3]
    let td3 = document.querySelectorAll('.imc')[3]
    let resIMC3 = document.createTextNode(`${calIMC3.toFixed(2)}`)

    tr3.appendChild(td3)
    td3.appendChild(resIMC3)
    
    //Tatiana
    let pesoKgSelec4 = document.querySelectorAll('.info-peso')[4].innerHTML
    let alturaMSelec4 = document.querySelectorAll('.info-altura')[4].innerHTML
    let kg4 = +pesoKgSelec4
    let metros4 = +alturaMSelec4
    let calIMC4 =  kg4 / (metros4 ** 2)
    let tr4 = document.querySelectorAll('.paciente')[4]
    let td4 = document.querySelectorAll('.imc')[4]
    let resIMC4 = document.createTextNode(`${calIMC4.toFixed(2)}`)

    tr4.appendChild(td4)
    td4.appendChild(resIMC4)

    botao.remove()
}

let botaoRegistro = document.querySelector('#botaoRegistro')
botaoRegistro.addEventListener('click', registrar)

function registrar() {
    
    //console.log('Hello, World')
    let nome = document.querySelector('#nomePaciente').value
    let peso = document.querySelector('#PesoKg').value
    let altura = document.querySelector('#AlturaM').value
    let idade = document.querySelector('#idade').value
    let formSexo = document.getElementsByName('sexo')
    
    if (nome.length == 0 || peso.length == 0 || altura.length == 0 || idade.length == 0) {
        window.alert('[ERRO!] Verifique os dados novamente!')
    } 
    else {
        let genderNumber = " "
        let IMC = peso / altura ** 2 
        
        if (formSexo[0].checked) {
            genderNumber = 1 
        } else {
            genderNumber = 0
        }
    
        let gordCorp = (1.20 * IMC) + (0.23 * idade) - (10.8 * genderNumber) - 5.4
        
    
        let table = document.querySelector('#registro')
        let tBodyRegistro = document.createElement('tBody')
        table.appendChild(tBodyRegistro)
    
        let td0 = document.createElement('td')
        tBodyRegistro.appendChild(td0)
        let content0 = document.createTextNode(`${nome}`)
        td0.appendChild(content0)
    
        let td1 = document.createElement('td')
        tBodyRegistro.appendChild(td1)
        let content1 = document.createTextNode(`${peso}`)
        td1.appendChild(content1)
    
        let td2 = document.createElement('td')
        tBodyRegistro.appendChild(td2)
        let content2 = document.createTextNode(`${altura}`)
        td2.appendChild(content2)
    
        let td3 = document.createElement('td')
        tBodyRegistro.appendChild(td3)
        let content3 = document.createTextNode(`${gordCorp.toFixed(2)}`)
        td3.appendChild(content3)
    
        let td4 = document.createElement('td')
        tBodyRegistro.appendChild(td4)
        let content4 = document.createTextNode(`${IMC.toFixed(2)}`)
        td4.appendChild(content4)
    }
}
