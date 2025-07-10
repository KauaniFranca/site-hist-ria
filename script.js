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
                afirmacao: "Buiu seguiu o instinto e foi até a sala 22 ainda que a escola estivesse quase vazia"
            },
            {
                texto: "Mostra o bilhete para a diretora e pede orientação.",
                afirmacao: "Buiu preferiu envolver a direção e não agir sozinho com um mistério desses"
            }
        ]
    },
    {
        enunciado: "Ao chegar na sala 22, encontra uma caixa trancada com uma mensagem: 'Só um verdadeiro corintiano saberá abrir.' Qual a reação do Buiu?",
        alternativas: [
            {
                texto: "Sorri e tenta usar a data do último título do Corinthians como senha.",
                afirmacao: "Como bom corintiano, Buiu tentou usar datas dos títulos até ouvir o clique da tranca"
            },
            {
                texto: "Pensa que é uma armadilha e decide não mexer mais nisso.",
                afirmacao: "Buiu sentiu um arrepio na espinha e decidiu deixar o mistério pra lá por enquanto"
            }
        ]
    },
    {
        enunciado: "Dentro da caixa havia uma fita cassete com a etiqueta: 'Ouça no rádio velho da sala dos professores'. O que ele faz?",
        alternativas: [
            {
                texto: "Vai até lá imediatamente para ouvir o conteúdo.",
                afirmacao: "Corajosamente, Buiu foi até a sala dos professores e ligou o rádio antigo para ouvir a fita"
            },
            {
                texto: "Decide levar a fita para casa e ouvir lá com calma.",
                afirmacao: "Buiu levou a fita para casa e passou a noite inquieto tentando entender o que aquilo significava"
            }
        ]
    },
    {
        enunciado: "A gravação falava sobre um projeto secreto escondido nos arquivos da escola. O que ele faz?",
        alternativas: [
            {
                texto: "Chama um ex-aluno hacker de confiança para ajudar a investigar.",
                afirmacao: "Buiu chamou o ex-aluno Bruno, que gostava de sistemas antigos, para ajudar na investigação"
            },
            {
                texto: "Vai sozinho à sala de arquivos à noite.",
                afirmacao: "Buiu entrou sozinho na sala de arquivos à noite com uma lanterna para investigar a verdade"
            }
        ]
    },
    {
        enunciado: "Entre documentos antigos, ele encontra um dossiê com o título: 'Projeto VAR - Vantagem Absoluta de Rendimento'. E agora?",
        alternativas: [
            {
                texto: "Faz uma denúncia anônima sobre isso ao sindicato dos professores.",
                afirmacao: "Buiu decidiu denunciar anonimamente o caso para as autoridades competentes"
            },
            {
                texto: "Continua investigando para descobrir quem está por trás do projeto.",
                afirmacao: "Buiu sabia que havia mais por trás e continuou investigando para descobrir os culpados"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = [];

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
    historiaFinal.push(opcaoSelecionada.afirmacao);
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O episódio termina assim...";

    // Transições variadas para dar fluidez
    const transicoes = [
        "Então,",
        "Em seguida,",
        "Logo,",
        "Mais tarde,",
        "Por fim,"
    ];

    let historia = "";

    historiaFinal.forEach((frase, i) => {
        let fraseFormatada = frase.charAt(0).toUpperCase() + frase.slice(1) + ".";

        if (i === 0) {
            historia += fraseFormatada + " ";
        } else if (i <= transicoes.length) {
            historia += transicoes[i-1] + " " + frase.charAt(0).toLowerCase() + frase.slice(1) + ". ";
        } else {
            // Para frases além das transições, só junta com espaço
            historia += frase.charAt(0).toLowerCase() + frase.slice(1) + ". ";
        }
    });

    historia += "No fim dessa semana intensa, Buiu nunca mais foi o mesmo e carregou esse segredo para sempre.";

    textoResultado.textContent = historia;
    caixaAlternativas.textContent = "";

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar de novo";
    botaoReiniciar.addEventListener("click", reiniciarJogo);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarJogo() {
    atual = 0;
    historiaFinal = [];
    textoResultado.textContent = "";
    mostraPergunta();
}

mostraPergunta();
