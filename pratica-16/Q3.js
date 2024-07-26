

const saudacao = (nome, hora) => {
    if (hora >= 5 && hora < 12) {
        return `Bom dia, ${nome}!`;
    } else if (hora >= 12 && hora < 18) {
        return `Boa tarde, ${nome}!`;
    } else {
        return `Boa noite, ${nome}!`;
    }
};

const nomeUsuario = "João";
const horaAtual = 21; 
const saudar = saudacao(nomeUsuario, horaAtual);
console.log(saudar); 