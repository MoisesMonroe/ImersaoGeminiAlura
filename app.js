function submit() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "Nenhum filme corresponde a sua busca!";
        return false;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let keywords = dado.keywords.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || keywords.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>`;
        }
    }

    if (resultados === "") {
        resultados = "Nada relacionado a sua busca foi encontrado :(";
    }

    section.innerHTML = resultados;
}
