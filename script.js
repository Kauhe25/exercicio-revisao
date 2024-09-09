window.addEventListener('load', function() {
    console.log('função onload - teste')
})

const URL_API_CONSULTA_LIVROS = "https://api-aula.up.railway.app/livros";

async function mostrarLivros() {
    const response = await fetch(URL_API_CONSULTA_LIVROS);
    const livros = await response.json();
    const tabelaPopulada = criarTabelaLivros(livros);
    document.getElementById('caixa_livros').innerHTML = tabelaPopulada;
    
}

function criarTabelaLivros (livros) {
    let dadosTabela = '';

    for(let i = 0; i< livros.length; i++){
        dadosTabela += 
        `<tr>
            <td>${livros[i].id}</td>
            <td>${livros[i].title}</td>
            <td>${livros[i].description}</td>
        </tr>`
    }
    const inicioTabela = `
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>`;

    const fimTabela = `
            </tbody>
        </table>`;    

    return inicioTabela + dadosTabela + fimTabela; 
}