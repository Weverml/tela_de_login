
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') === 'password'){
        inputSenha.setAttribute('type', 'text')
    }
    else{
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
    let usuario = document.querySelector('#usuario')
    let labelUser = document.querySelector('#labelUser')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if(usuario.value == item.usuario && senha.value == item.senha){
            userValid = {
                nome: item.nome,
                user: item.usuario,
                senha: item.senha
            }
        }
    })
    
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        
        window.location.href = 'http://127.0.0.1:5500/assets/html/tela_inicial.html'

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }
    else{
        labelUser.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorreto!'
        usuario.focus()
    }
}