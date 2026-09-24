import PromptSync from "prompt-sync"

const prompt = PromptSync()

let opcao = ''

do {
    console.log('\n=== Calculadora ===')
    console.log('1. Soma')
    console.log('2. Subtração')
    console.log('3. Multiplicação')
    console.log('4. Divisão')
    console.log('0. Sair')
    opcao = prompt('Escolha uma opção: ')
} while(opcao !== '0')