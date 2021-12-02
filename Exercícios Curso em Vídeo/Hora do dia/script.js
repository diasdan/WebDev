function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        document.body.style.background = '#cf8b45'
        msg.innerHTML += ` Bom dia!`
        document.img.src = "imagex/morning.jpg"
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML += ` Boa Tarde!`
        img.src = "imagex/afternoon.jpg"
        document.body.style.background = '#679dd2'
    } else {
        msg.innerHTML += ` Boa noite!`
        img.src = "imagex/night.jpg"
        document.body.style.background = '#0a0a13'
    } 
}