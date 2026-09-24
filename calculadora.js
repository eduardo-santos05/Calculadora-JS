import PromptSync from "prompt-sync"

const prompt = PromptSync()

let opcao = ''

function somar() {
    let num1 = Number(prompt('Informe o primeiro número: '))
    let num2 = Number(prompt('Informe o segundo número: '))
    let soma = num1 + num2
    console.log(`${num1} + ${num2} = ${soma}`)
}

function subtrair() {
    let num1 = Number(prompt('Informe o primeiro número: '))
    let num2 = Number(prompt('Informe o segundo número: '))
    let subtracao = num1 - num2
    console.log(`${num1} - ${num2} = ${subtracao}`)
}

function multiplicar() {
    let num1 = Number(prompt('Informe o primeiro número: '))
    let num2 = Number(prompt('Informe o segundo número: '))
    let multiplicacao = num1 * num2
    console.log(`${num1} * ${num2} = ${multiplicacao}`)
}

function dividir() {
    let num1 = Number(prompt('Informe o primeiro número: '))
    let num2 = Number(prompt('Informe o segundo número: '))
    let divisao = num1 / num2
    console.log(`${num1} / ${num2} = ${divisao}`)
}

do {
    console.log('\n=== Calculadora ===')
    console.log('1. Soma')
    console.log('2. Subtração')
    console.log('3. Multiplicação')
    console.log('4. Divisão')
    console.log('0. Sair')
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            somar()
            break
        case '2':
            subtrair()
            break
        case '3':
            multiplicar()
            break
        case '4':
            dividir()
            break
    }
} while(opcao !== '0')