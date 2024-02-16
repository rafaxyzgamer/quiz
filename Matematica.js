let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomejogador1").innerHTML = jogador1 + " :";
document.getElementById("nomejogador2").innerHTML = jogador2 + " :";

document.getElementById("pontosjogador1").innerHTML = pontosj1;
document.getElementById("pontosjogador2").innerHTML = pontosj2;

document.getElementById("turnopergunta").innerHTML = "Turno de pergunta" + jogador1;
document.getElementById("turnoresposta").innerHTML = "Turno de resposta" + jogador2;

function enviar() {
    numero1 = document.getElementById("number1").value;
    numero2 = document.getElementById("number2").value;

    gabarito = parseInt(numero1) * parseInt(numero2);

    pergunta = "<h4>" + numero1 + " x " + numero2 + "</h4>";
    input = "<br> Resposta: <input type='number id='resposta'>";
    botao = "<br><br>  <button onclick='verificar()'>Verificar</button>";
    linha = pergunta + input + botao;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

turno_pergunta = "jogador1";
turno_resposta = "jogador2";

function verificar() {
    resposta_usuario = document.getElementById("resposta").value;
    if (resposta_usuario == gabarito) {
        if (turno_resposta == "jogador1") {
            pontosj1 = pontosj1 + 1;
            document.getElementById("pontosjogador1").innerHTML = pontosj1;
        } else {
            pontosj2 = pontosj2 + 1;
            document.getElementById("pontosjogador2").innerHTML = pontosj2;
        }
    }
    if (turno_pergunta == "jogador1") {
        turno_pergunta = "jogador2";
        document.getElementById("turnopergunta").innerHTML = "turno_pergunta: " + jogador2;
    } else {
        turno_pergunta = "jogador1";
        document.getElementById("turnopergunta").innerHTML = "turno_pergunta: " + jogador1;
    }
        if (turno_resposta == "jogador1") {
            turno_resposta = "jogador2";
            document.getElementById("turnoresposta").innerHTML = "turno_resposta: " + jogador2;
        } else {
            turno_resposta = "jogador1";
            document.getElementById("turnoresposta").innerHTML = "turno_resposta: " + jogador1;
        }
    }