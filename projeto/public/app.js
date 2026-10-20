async function listarTarefas() {
    const url = 'https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas';
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            imprimir(dados);
        });
}

async function listarTarefaPorId() {
    const id = document.getElementById("get-id-da-tarefa").value;

    const url = `https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas/${id}`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            imprimir(dados);
        });
}

async function inserirTarefa() {
    const titulo = document.getElementById("post-titulo-da-tarefa").value;
    const status = document.getElementById("post-status-da-tarefa").value;

    const url = 'https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas';
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            status: status
        }),
    });

    listarTarefas();
}

async function atualizarTarefa() {
    const id = document.getElementById("put-id-da-tarefa").value;
    const titulo = document.getElementById("put-titulo-da-tarefa").value;
    const status = document.getElementById("put-status-da-tarefa").value;

    const url = `https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas/${id}`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            titulo: titulo,
            status: status,
        }),
    });

    listarTarefas();
}

async function excluirTarefa() {
    const id = document.getElementById("delete-id-da-tarefa").value;

    const url = `https://solid-spork-q79wg9gg79wrhwpj-3000.app.github.dev/tarefas/${id}`;
    await fetch(url, {
        method: "DELETE"
    });

    listarTarefas();
}

function imprimir(dados) {
    const container = document.getElementById('container');
    const tarefas = Array.isArray(dados) ? dados : [dados];

    container.innerHTML = "";

    if (tarefas.length === 0 || dados === null)
        return;

    const resp = tarefas.map((tarefa) => { return `<p>${tarefa}</p>` });

    container.innerHTML = resp;
}
