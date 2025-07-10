const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Professor Buiu encontra um bilhete misterioso em sua mesa: 'A chave está na sala 22. Não confie em ninguém.' O que ele faz?",
        alternativas: [
            {
                texto: "Vai até a sala 22 imediatamente, mesmo sendo fora do horário.",
                afirmacao: "Buiu seguiu o instinto e foi até a sala 22 ainda que a escola estivesse quase vazia."
            },
            {
                texto: "Mostra o bilhete para a diretora e pede orientação.",
                afirmacao: "Preferiu envolver a direção e não agir sozinho com um mistério desses."
            }
        ]
    },
    {
        enunciado: "Ao chegar na sala 22, encontra uma caixa trancada com uma mensagem: 'Só um verdadeiro corintiano saberá abrir.' Qual a reação do Buiu?",
        alternativas: [
            {
                texto: "Sorri e tenta usar a data do último título do Corinthians como senha.",
                afirmacao: "Como bom corintiano, tentou 2015, 2012... até acertar e ouvir o clique da tranca."
            },
            {
                texto: "Pensa que é uma armadilha e decide não mexer mais nisso.",
                afirmacao: "Sentiu um arrepio na espinha e achou melhor deixar o mistério pra lá... por enquanto."
            }
        ]
    },
    {
        enunciado: "Dentro da caixa havia uma fita cassete com a etiqueta: 'Ouça no rádio velho da sala dos professores'. O que ele faz?",
        alternativas: [
            {
                texto: "Vai até lá imediatamente para ouvir o conteúdo.",
                afirmacao: "Corajoso, foi até a sala dos professores e ligou o rádio antigo. A fita começou a tocar..."
            },
            {
                texto: "Decide levar a fita para casa e ouvir lá com calma.",
                afirmacao: "Levou a fita escondido e passou a noite inquieto tentando entender o que aquilo tudo significava."
            }
        ]
    },
    {
        enunciado: "A gravação falava sobre um projeto secreto escondido nos arquivos da escola. O que ele faz?",
        alternativas: [
            {
                texto: "Chama um ex-aluno hacker de confiança para ajudar a investigar.",
                afirmacao: "Buiu ligou pro ex-aluno Bruno, que adorava mexer com redes e sistemas antigos. Juntos, vasculharam os arquivos."
            },
            {
                texto: "Vai sozinho à sala de arquivos à noite.",
                afirmacao: "Com lanterna e coragem, entrou sozinho na sala de arquivos pra investigar a verdade."
            }
        ]
    },
    {
        enunciado: "Entre documentos antigos, ele encontra um dossiê com o título: 'Projeto VAR - Vantagem Absoluta de Rendimento'. E agora?",
        alternativas: [
            {
                texto: "Faz uma denúncia anônima sobre isso ao sindicato dos professores.",
                afirmacao: "Decidiu não arriscar e entregou o caso para autoridades competentes."
            },
            {
                texto: "Continua investigando para descobrir quem está por trás do projeto.",
                afirmacao: "Buiu sabia que o buraco era mais embaixo. Continuou investigando para encontrar os culpados."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.setAttribute("aria-label", alternativa.texto);
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O episódio termina assim...";

    const historia = `Em uma semana comum no ensino médio, o professor Buiu encontrou um bilhete misterioso em sua mesa que dizia: "A chave está na sala 22. Não confie em ninguém." Mesmo com a escola quase vazia, ele seguiu seu instinto e foi até a sala indicada. Ao chegar, encontrou uma caixa trancada com uma mensagem que só um verdadeiro corintiano saberia decifrar. Com seu jeito fanático pelo Corinthians, tentou usar datas dos títulos do time até ouvir o clique da tranca.

Dentro da caixa, havia uma fita cassete com a etiqueta: "Ouça no rádio velho da sala dos professores." Corajosamente, Buiu foi até lá e ligou o rádio antigo, ouvindo o conteúdo intrigante da fita. A gravação falava sobre um projeto secreto escondido nos arquivos da escola. Para investigar, ele chamou um ex-aluno hacker de confiança, o Bruno, e juntos vasculharam documentos antigos.

Entre esses papéis, encontraram um dossiê intitulado "Projeto VAR - Vantagem Absoluta de Rendimento". Percebendo a gravidade da situação, Buiu decidiu continuar a investigação para descobrir quem estava por trás desse projeto. Durante essa semana intensa, sua rotina mudou completamente, e ele viveu um capítulo que jamais esqueceria.`;

    textoResultado.textContent = historia;
    caixaAlternativas.textContent = "";

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar de novo";
    botaoReiniciar.addEventListener("click", reiniciarJogo);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    mostraPergunta();
}

mostraPergunta();
