function alternar() {
    let texto = document.getElementById("texto");

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}



const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

document.getElementById("mostrar").addEventListener("click", function () {
    resultado.textContent = entrada.value;
});

document.getElementById("limpar").addEventListener("click", function () {
    resultado.textContent = "";
    entrada.value = "";
});



const respostas = document.querySelectorAll(".resposta");
const resultadoPergunta = document.getElementById("resultadoPergunta");

respostas.forEach(function(resposta) {
    resposta.addEventListener("click", function() {

        if (resposta.dataset.correta === "true") {
            resultadoPergunta.textContent = "✅ Resposta correta!";
        } else {
            resultadoPergunta.textContent = "❌ Resposta incorreta!";
        }

    });
});



const novaTarefa = document.getElementById("novaTarefa");
const adicionarTarefa = document.getElementById("adicionarTarefa");
const listaTarefas = document.getElementById("listaTarefas");

adicionarTarefa.addEventListener("click", function () {

    if (novaTarefa.value.trim() !== "") {

        const item = document.createElement("li");

        item.textContent = novaTarefa.value;

        listaTarefas.appendChild(item);

        novaTarefa.value = "";
    }

});


const celsius = document.getElementById("celsius");
const converter = document.getElementById("converter");
const resultadoTemperatura = document.getElementById("resultadoTemperatura");

converter.addEventListener("click", function () {

    const valorCelsius = Number(celsius.value);

    const fahrenheit = (valorCelsius * 9 / 5) + 32;

    resultadoTemperatura.textContent =
        `${valorCelsius}°C equivalem a ${fahrenheit.toFixed(1)}°F`;

});

const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

function apagarTodas() {
    vermelho.style.backgroundColor = "#333";
    amarelo.style.backgroundColor = "#333";
    verde.style.backgroundColor = "#333";
}

document.getElementById("btnVermelho").addEventListener("click", function () {
    apagarTodas();
    vermelho.style.backgroundColor = "red";
});

document.getElementById("btnAmarelo").addEventListener("click", function () {
    apagarTodas();
    amarelo.style.backgroundColor = "yellow";
});

document.getElementById("btnVerde").addEventListener("click", function () {
    apagarTodas();
    verde.style.backgroundColor = "lime";
});


const numeroTabuada = document.getElementById("numeroTabuada");
const gerarTabuada = document.getElementById("gerarTabuada");
const resultadoTabuada = document.getElementById("resultadoTabuada");

gerarTabuada.addEventListener("click", function () {

    const numero = Number(numeroTabuada.value);

    resultadoTabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        resultadoTabuada.innerHTML +=
            `${numero} × ${i} = ${numero * i}<br>`;
    }

});