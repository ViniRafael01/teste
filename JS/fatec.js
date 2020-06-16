const formulario = document.getElementById('formulario')
const produtos = document.getElementById('produtos')
const quantidades = document.getElementById('quantidades')
const endereços = document.getElementById('endereços')
const numeros = document.getElementById('numeros')
const pagamentos = document.getElementById('pagamentos')
const encomendas = document.getElementById('encomendas')
const resposta = document.getElementById('resposta')

let produto = []
let pagamento = []

carregarProduto()
carregarPagamentos()

formulario.onsubmit = event => {
    event.preventDefault()

    if (!validarProdutos() | !validarQuantidade() | !validarEndereços() | !validarNumeros() |
        !validarPagamento() | !validarEncomenda()) return

    const jeito = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        endereços: endereços.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    produto.push(jeito)
    localStorage.setItem('venda', JSON.stringify(produto))

    produtos.value = ''
    quantidades.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

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

}

formulario.onsubmit = () => {

    const money = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        endereços: endereços.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    pagamento.push(money)
    localStorage.setItem('entrega', JSON.stringify(pagamento))

    produtos.value = ''
    quantidades.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirPagamento()
}
function carregarPagamento() {
    pagamento = [
        { codigo: '1', texto: 'Galão de água 20 litros, BONAFONT' },
        { codigo: '2', texto: 'Galão de água 20 litros, MINAURA' }
    ]
}
for (let item of pagamento) {
    const option = document.createElement('option')
    option.value = item.codigo
    option.textContent = item.texto
    pagamentos.append(option)
}

formulario.onsubmit = event => {
    event.preventDefault()


    if (!validarProdutos() | !validarQuantidade() | !validarEndereços() | !validarNumeros() |
        !validarPagamento() | !validarEncomenda()) return

    const caminho = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        endereços: endereços.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    pagamento.push(caminho)
    localStorage.setItem('hehe', JSON.stringify(pagamento))

    produtos.value = ''
    quantidades.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirPagamentos()
}
function carregarPagamentos() {
    pagamento = [
        { codigo: '1', texto: 'Pagamento a vista' },
        { codigo: '2', texto: 'Pagamento com o cartão' }
    ]

    for (let item of pagamento) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        pagamentos.append(option)
    }

}

function carregarProdutos() {
    registros = JSON.parse(localStorage.getItem('venda')) || []
    exibirProdutos()
}

function exibirProduto() {
    resposta.textContent = ''
    resposta.className = ''

    if (!produto.length) return

    const table = document.createElement('table')
    table.innerHTML = `
      <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Endereço</th>
        <th>Numero</th>
        <th class="actions"></th>
      </tr>`
    resposta.append(table)

    for (let produto of produto) {
        const tr = document.createElement('tr')
        table.append(tr)

        const td1 = document.createElement('td')
        td1.textContent = produto.nome
        tr.append(td1)

        const td2 = document.createElement('td')
        td2.textContent = especies.find(
            item => item.codigo === produto.produtos
        ).texto
        tr.append(td2)

        const td3 = document.createElement('td')
        td3.textContent = produto.quantidades
        tr.append(td3)

        const td4 = document.createElement('td')
        td4.textContent = produto.endereços
        tr.append(td4)

        const td5 = document.createElement('td')
        td5.className = 'actions'
        tr.append(td5)

        const excluir = document.createElement('button')
        td4.append(excluir)
        excluir.textContent = '✖'
        excluir.className = 'delete'

        excluir.onclick = excluirProdutos.bind(this, produto)
    }
}

function excluirProdutos(produto) {
    const i = produto.findIndex(jeito => jeito === produto)

    if (i > -1) {
        produto.splice(i, 1)
        localStorage.setItem('venda', JSON.stringify(produto))
    }
    exibirProduto
}

function validarProdutos() {
    if (!produtos.value) {
        resposta.textContent = 'O campo é obrigatório'
        resposta.className = 'error'
        produtos.classList.add('error')
        produtos.focus()
        return false
    }
    produtos.classList.remove('error')
    return true
}

function validarQuantidade() {
    quantidades.value = quantidades.value.trim()

    if (!quantidades.value) {
        resposta.textContent = 'Campo é obrigatório!'
        resposta.className = 'error'
        quantidades.classList.add('error')
        quantidades.focus()
        return false
    }
    quantidades.classList.remove('error')
    return true
}