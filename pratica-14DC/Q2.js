// 2. Escreva um código que verifica o estado da água com base na
// temperatura fornecida. Se a temperatura for 0 ou menor, exiba "Sólido". Se
// a temperatura for entre 1 e 99, exiba "Líquido". Se a temperatura for 100 ou
// mais, exiba "Gasoso"

let temperatura = 10;

if (temperatura <= 0) {
    console.log("Sólido");
} else if (temperatura <= 99) {
    console.log("Líquido");
} else if (temperatura >= 100) {
    console.log("Gasoso")
}