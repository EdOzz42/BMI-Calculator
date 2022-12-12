let botaoRegistrar = document.querySelector('#botaoRegistro')
botaoRegistrar.addEventListener('click', registrarNovoPaciente)

function registrarNovoPaciente() {
    let nome = document.querySelector('#nomePaciente').value
    let peso = document.querySelector('#PesoKg').value
    let altura = document.querySelector('#AlturaM').value
    let idade = document.querySelector('#idade').value
    let formSexo = document.getElementsByName('sexo')
    
    let vereficarDados = verificarDadosEstãoCorretos(nome, peso, altura, idade) 
    if (vereficarDados == false) {
        let genderNumber = gerarGenderNumber(formSexo)
        calcularGorduraCorporalEIndiceMassaCorporal(peso, altura, idade, genderNumber)
        criarTabela(nome, peso, altura, IMC, gorduraCorporal)
        limparDadosAposRegistro(nome, peso, altura, idade)
    } 
}

function verificarDadosEstãoCorretos(nome, peso, altura, idade) {
    if (nome.length == 0 || peso.length == 0 || altura.length == 0 || idade.length == 0) {
        window.alert('[ERRO!] Verifique os dados novamente!')
    } 
    else if (peso < 0 || altura < 0 || idade < 0) {
        window.alert('[ERRO!] Você não pode usar valores negativos!')
    } 
    else if (peso >= 600) {
        window.alert('[ERRO!] Peso inválido!')  
    } 
    else if (altura >= 2.5) {
        window.alert('[ERRO!] Altura inválida!')
    }
    else if (idade >= 120) {
        window.alert(`[ERRO!] Idade inválida. Só tartaruga tem ${idade} anos!`)
    }
    else {
        return false
    }
}

function gerarGenderNumber(formSexo) {
    if (formSexo[0].checked) {
    return 1 
    }
    return 0
}

function calcularGorduraCorporalEIndiceMassaCorporal(peso, altura, idade, genderNumber) {
    IMC = peso / altura ** 2
    gorduraCorporal = (1.20 * IMC) + (0.23 * idade) - (10.8 * genderNumber) - 5.4
    return [IMC, gorduraCorporal]
}

function criarTabela(nome, peso, altura, IMC, gorduraCorporal) {
    let tBody = document.querySelector('#contentTabelaNovos')
    let tr = document.createElement('tr')
    tr.setAttribute('id', 'tr')
    tBody.appendChild(tr)

    let td0 = document.createElement('td')
    tr.appendChild(td0)
    let content0 = document.createTextNode(`${nome}`)
    td0.appendChild(content0)

    let td1 = document.createElement('td')
    tr.appendChild(td1)
    let content1 = document.createTextNode(`${peso}`)
    td1.appendChild(content1)

    let td2 = document.createElement('td')
    tr.appendChild(td2)
    let content2 = document.createTextNode(`${altura}`)
    td2.appendChild(content2)

    let td3 = document.createElement('td')
    tr.appendChild(td3)
    let content3 = document.createTextNode(`${gorduraCorporal.toFixed(2)}`)
    td3.appendChild(content3)

    let td4 = document.createElement('td')
    tr.appendChild(td4)
    let content4 = document.createTextNode(`${IMC.toFixed(2)}`)
    td4.appendChild(content4)
}

function limparDadosAposRegistro() {
    nome = document.querySelector('#nomePaciente').value = ''
    peso = document.querySelector('#PesoKg').value = ''
    altura = document.querySelector('#AlturaM').value = ''
    idade = document.querySelector('#idade').value = ''
}

let botaoLimpar = document.querySelector('#limpar')
botaoLimpar.addEventListener('click', limpar)

function limpar() {
    let tBody = document.querySelector('#contentTabelaNovos')
    let tr = document.querySelector('#tr')
    tBody.removeChild(tr)
}

let botaoLimparAll = document.querySelector('#limparTudo')
botaoLimparAll.addEventListener('click', limparTudo) 

function limparTudo() {
    let tBody = document.querySelector('#contentTabelaNovos')
    
    while (tBody.firstChild) {
        let tr = document.querySelector('#tr')
        tBody.removeChild(tr)
    }
}