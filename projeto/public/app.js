function listarTarefas() {
    const container = document.getElementById('container');

    const url = 'https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas';
    fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            container.innerHTML = JSON.stringify(dados);
        });
}

function listarTarefaPorId() {
    const id = document.getElementById("get-id-da-tarefa").value;
    const container = document.getElementById('container');

    const url = `https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas/${id}`;
    fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            container.innerHTML = JSON.stringify(dados);
        });
}

function inserirTarefa() {
    const id = document.getElementById("post-id-da-tarefa").value;
    const titulo = document.getElementById("post-titulo-da-tarefa").value;
    const status = document.getElementById("post-status-da-tarefa").value;

    const url = 'https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas';
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            status: status
        }),
    });
}