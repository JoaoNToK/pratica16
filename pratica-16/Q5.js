function areaRetangulo(largura, altura) {
    const area =largura * altura;
    return area;
}

const larguraDoRetangulo = 5;
const alturaDoRetangulo = 10;
const areaResultado = areaRetangulo(larguraDoRetangulo, alturaDoRetangulo);

console.log(`A área do retângulo é:${larguraDoRetangulo} x ${alturaDoRetangulo} = ${areaResultado}`);