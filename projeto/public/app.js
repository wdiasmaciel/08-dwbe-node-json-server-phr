function listarTarefas() {
    const url = 'https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas';
    const container = document.getElementById('container');
    fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            container.innerHTML = dados;
        });
}

