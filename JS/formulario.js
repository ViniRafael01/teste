const formulario = document.getElementById('formulario')
const produtos = document.getElementById('produtos')
const quantidade = document.getElementById('quantidade')
const endereço = document.getElementById('endereço')
const numero = document.getElementById('numero')
const metodo = document.getElementById('metodo')
const resposta = document.getElementById('resposta')


let produto = []
let metodos = []

carregarProduto()
carregarMetodo()

formulario.onsubmit = event => {
    event.preventDefault()
    if (!validarProdutos() | validarQuantidade() | !validarEndereço() | !validarNumero() |
        !validarMetodo()) return

    const compra = {
        produtos: produtos.value,
        quantidade: quantidade.value.trim(),
        endereço: endereço.value.trim(),
        numero: numero.value.trim(),
        metodo: metodo.value.trim()
    }

    produto.push(compra)
    localStorage.setItem('caixa', JSON.stringify(produto))
    produtos.value = ''
    quantidade.value = ''
    endereço.value = ''
    numero.value = ''
    metodo.value = ''

    exibirProduto()
}
function carregarProduto() {
    produto = [
        { codigo: '1', texto: 'Galão de água 20 litros, BONAFONT' },
        { codigo: '2', texto: 'Galão de água 20 litros, MINAURA' },
        { codigo: '3', texto: 'Galão de água 10 litros, MINAURA' },
        { codigo: '4', texto: 'Galão de água 10 litros, BONAFONT' },
        { codigo: '5', texto: 'Botijão de gás' },
        { codiga: '6', texto: 'Dilute de Frutas Vermelhas' },
        { codigo: '7', texto: 'Água com gás' }
    ]

    for (let item of produto) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        produtos.append(option)
    }












    const jeito = {
        produtos: produtos.value,
        quantidade: quantidade.value.trim(),
        endereço: endereço.value.trim(),
        numero: numero.value.trim(),
        metodo: metodo.value.trim()
    }

    produto.push(jeito)
    localStorage.setItem('venda', JSON.stringify(metodos))
    produtos.value = ''
    quantidade.value = ''
    endereço.value = ''
    numero.value = ''
    metodo.value = ''

    exibirMetodo()
}
function carregarMetodo() {
    metodos = [
        { codigo: '1', texto: 'Galão de água 20 litros, BONAFONT' },
        { codigo: '2', texto: 'Galão de água 20 litros, MINAURA' },
        { codigo: '3', texto: 'Galão de água 10 litros, MINAURA' },
        { codigo: '4', texto: 'Galão de água 10 litros, BONAFONT' },
        { codigo: '5', texto: 'Botijão de gás' },
        { codiga: '6', texto: 'Dilute de Frutas Vermelhas' },
        { codigo: '7', texto: 'Água com gás' }
    ]

    for (let item of metodos) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        meto.append(option)
    }
}