import * as fs from 'fs';
import prompt from 'prompt-sync';
const promptSync: any = prompt();

class Search<T> {
    sequential(e:T, v:T[]):number{
        let pos: number = -1;
        for(let i:number =0; i< v.length; ++i){
            if(e == v[i])
                return i;
        }
        return pos;
    }
}


function carregarPalavras(arquivo: string): string[] {
    try {
        const data = fs.readFileSync(arquivo, 'utf8');
        return data.split(" ");
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}

function main() {
    const arquivo: string = promptSync("Digite o caminho do arquivo de texto: ");
    const palavras: string[] = carregarPalavras(arquivo);

    if (palavras.length === 0) {
        console.log("Arquivo vazio ou não encontrado.");
        return;
    }

    const palavraBusca: string = promptSync("Digite a palavra que deseja buscar: ");

    const search = new Search<string>();
    const indice: number = search.sequential(palavraBusca, palavras);

    if (indice !== -1) {
        console.log(`A palavra '${palavraBusca}' foi encontrada na posição ${indice}.`);
    } else {
        console.log("A palavra não foi encontrada.");
    }
}

main();