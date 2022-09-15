function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('img')
    var agora = new Date()
    var horadodia = agora.getHours()
    if (horadodia >= 0 && horadodia < 12) {
        //BOM DIA!
        msg.innerHTML += 'Bom dia!'
        img.innerHTML = `<img class= "imagem" src="./fotos/1.png" alt="manha">`
        document.body.style.background = '#fcf4b2'
    } else if (horadodia >= 12 && horadodia < 18) {
        //BOA TARDE!
        img.innerHTML = `<img class= "imagem" src="./fotos/2.png" alt="tarde">`
        msg.innerHTML += 'Boa tarde!'
        document.body.style.background = '#A5B452'
    } else {
        //BOA NOITE!
        img.innerHTML = `<img class= "imagem" src="./fotos/3.png" alt="noite">`
        msg.innerHTML += 'Boa noite!'
        document.body.style.background = '#2F2963'
    }
}