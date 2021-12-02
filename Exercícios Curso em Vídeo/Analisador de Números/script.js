let storage = []
let s = 0
let c = -1
let max = 0
let min = 0
function add(){
    let num = document.getElementById('n1')
    let n = Number(num.value)
    let li = document.getElementById('list')
    if (n <= 0 || n > 100){
        window.alert('Valor inválido')
    }
    else if (storage.indexOf(n) == -1) {
        storage.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adcionado.`
        item.value = `number${n}`
        li.appendChild(item)
        s += n
        for(let pos in storage){
            if (pos == 0){
                max = storage[pos]
                min = storage[pos]
            } else if (storage[pos] > max){
                max = storage[pos]
            } else if (storage[pos] < min){
                min = storage[pos]
            }
        }
    }
    else {
        window.alert('Valor já adcionado.')
    }
}
function done(){
    let res = document.getElementById("res")
    res.innerHTML = `Ao todo, temos ${storage.length} números cadastrados.` 
    res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${s}.</p>` 
    res.innerHTML += `<p>A média dos valores digitados é ${s / storage.length}</p>`

}