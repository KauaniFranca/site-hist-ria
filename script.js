const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Professor Biu encontra um bilhete misterioso em sua mesa: 'A chave está na sala 22. Não confie em ninguém.' O que ele faz?",
        alternativas: [
            {
                texto: "Vai até a sala 22 imediatamente, mesmo sendo fora do horário.",
                afirmacao: "Biu seguiu o instinto e foi até a sala 22 ainda que a escola estivesse quase vazia."
            },
            {
                texto: "Mostra o bilhete para a diretora e pede orientação.",
                afirmacao: "Preferiu envolver a direção e não agir sozinho com um mistério desses."
            }
        ]
    },
    {
        enunciado: "Ao chegar na sala 22, encontra uma caixa trancada com uma mensagem: 'Só um verdadeiro corintiano saberá abrir.' Qual a reação do Biu?",
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
                afirmacao: "Biu ligou pro ex-aluno Bruno, que adorava mexer com redes e sistemas antigos. Juntos, vasculharam os arquivos."
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
                afirmacao: "Biu sabia que o buraco era mais embaixo. Continuou investigando para encontrar os culpados."
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O episódio termina assim...";
    
    let historia = "Em uma semana comum no ensino médio, o Professor Biu viu sua rotina mudar completamente. ";
    const partes = historiaFinal.trim().split(". ").filter(p => p.length > 0);
    
    partes.forEach((parte, index) => {
        historia += (index === 0 ? "" : "Depois, ") + parte.toLowerCase() + ". ";
    });

    historia += "No fim das contas, Biu não apenas deu aula naquela semana, como viveu um capítulo que jamais esqueceria.";
    textoResultado.textContent = historia;
    caixaAlternativas.textContent = "";

    // Cria botão "Jogar de novo"
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
