let num = document.getElementById('n1')
let li = document.getElementById('list')
let res = document.querySelector('div#res')
let storage = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){                // ! - não
    if (isNumero(num.value) && !inLista(num.value, storage)){
        storage.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        list.appendChild(item)
        res.innerHTML = '' // limpa a caixa de resultado sempre que um valor novo for adcionado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // limpa o valor da caixa
    num.focus() // foca o cursor automaticamente na caixa, sem necessitar clicar
}

function done(){
    if(storage.length == 0){
        window.alert('Adcione valores antes de finalizar!')
    } else {
        let tot = storage.length
        let maior = storage[0]
        let menor = storage[0]
        let soma = 0
        let media = 0
        for (let pos in storage){
            soma += storage[pos]
            if (storage[pos] > maior)
                maior = storage[pos]
            if (storage[pos] < menor)
                menor = storage[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
}
