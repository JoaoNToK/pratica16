function exibirMensagem(mensagem) {
    console.log(mensagem)
}

setTimeout(function() {
    exibirMensagem("Passaram 3 segundos!")
}, 3000);