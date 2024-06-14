type FuncaoProposicional = (a: number, b: number) => boolean;

class Relacao {
  construir_pares(A: number[], B: number[], func: FuncaoProposicional): { pares: [number, number][] } {
    const pares: [number, number][] = [];

    A.forEach(a => {
      B.forEach(b => {
        if (func(a, b)) {
          pares.push([a, b]);
        }
      });
    });

    return { pares };
  }
}


const funcExemplo: FuncaoProposicional = (a, b) => a <= b || a >= b;

const A = [1, 2, 3];
const B = [2, 3, 4];

const relacao = new Relacao();
const resultado = relacao.construir_pares(A, B, funcExemplo);
console.log(resultado);
