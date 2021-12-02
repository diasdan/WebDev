var born = 1944
var year = new Date()
var now = year.getFullYear()
var age = now - born
console.log(`Você tem ${age} anos`)
    if (age < 30){
        console.log('Você é um jovem')
    }
    else if (age >= 30 && age < 50){
        console.log('Você é um adulto')
    }
    else if (age >= 50 && age < 60){
        console.log('O senhor é um sênior')
    }
    else if (age >= 60){
        console.log('O senhor é um idoso')
    }
    else{
        console.log('[ERRO] Valor de idade inválida.')
    
}