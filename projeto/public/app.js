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
    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: "Estudar JSON Server",
            status: "Pendente",
        }),
    });
}