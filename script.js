window.addEventListener("scroll", function() {
  var fitilha = document.querySelector("fitilha");
  var fitilha2 = document.querySelector("fitilha2");
  var fitilha3 = document.querySelector("fitilha3");
  var fitilha4 = document.querySelector("fitilha4");
  var fitilha5 = document.querySelector("fitilha5");
  var fitilha6 = document.querySelector("fitilha6");
  
  fitilha.classList.toggle("abaixo", window.scrollY > 300);
  fitilha2.classList.toggle("abaixo", window.scrollY > 950);
  fitilha3.classList.toggle("abaixo", window.scrollY > 1800);
  fitilha4.classList.toggle("abaixo", window.scrollY > 2600);
  fitilha5.classList.toggle("abaixo", window.scrollY > 3200);
  fitilha6.classList.toggle("abaixo", window.scrollY > 4600);
  
});

function aparecer(){
  
  var nome = document.querySelector("nome");
  nome.classList.toggle("clique");

};

function aparecer1(){

  var nome1 = document.querySelector("nome1");
  nome1.classList.toggle("clique");

};

function aparecer2(){

  var nome2 = document.querySelector("nome2");
  nome2.classList.toggle("clique");

};

function aparecer3(){

  var nome3 = document.querySelector("nome3");
  nome3.classList.toggle("clique");

};

function aparecer4(){

  var nome4 = document.querySelector("nome4");
  nome4.classList.toggle("clique");

};

function aparecer5(){

  var nome5 = document.querySelector("nome5");
  nome5.classList.toggle("clique");

};

function formula(){

  var formula = document.querySelector("formula");
  var formula2 = document.querySelector(".Texto img");
  
  formula.classList.toggle("clique");
  formula2.classList.toggle("clique");

};

function resultados(){
  var resul = document.querySelector(".Rec img")
  var slider = document.querySelector(".slider");

  resul.classList.toggle("clique");
  slider.classList.toggle("clique");
};



window.addEventListener('DOMContentLoaded', function () {

    var els = document.querySelectorAll('.manual-btn');

    for (var i = els.length - 1; i >= 0; i--) {

        els[i].onclick = animarElement;
    }
});

function animarElement()
{
    var els = document.querySelectorAll('.manual-btn');

    for (var i = els.length - 1; i >= 0; i--) {
        var el = els[i];

        if (el !== this && el.classList.contains('animar')) {
            el.classList.remove('animar');
        }
    }

    if (!this.classList.contains('animar')) {
        this.classList.add('animar');
    }
}


const questions = [
  {
    question: "O que pode acontecer se descartar o pneu de maneira errada?",
    answers: [
      { text: "A)	O ambiente vai ficar visualmente bonito.", correct: false},
      { text: "B)	Acontecendo isso, os animais como, os cães e gatos, por exemplo, podem acabar ingerindo o pneu.", correct: false},
      { text: "C)	Pode acumular água no pneu e, dessa forma ele pode virar criadouro do mosquito aedes aegypti. ", correct: true},
      { text: "D)	Os pneus serão reciclados pelos pombos, transformando eles em uma linda residência.", correct: false},
      ,]
  },
  
  {
    question: "Qual é a maneira correta de descartar um pneu?",
    answers: [
      { text: "A)	Em um ponto de coleta. ", correct: true},
      { text: "B)	No rio mais próximo da minha casa.", correct: false},
      { text: "C)	Na rua. ", correct: false},
      { text: "D)	Do lado de um bando de pombos.", correct: false},
      ,]
  },

  {
    question: "Quantos anos um pneu demora para se decompor?",
    answers: [
      { text: "A)	6 meses.", correct: false},
      { text: "B)	600 anos. ", correct: true},
      { text: "C)	450 anos ", correct: false},
      { text: "D)	400 anos.", correct: false},
      ,]
  },

  {
    question: "Além de virar um local para os aedes aegypti botarem seus ovos, o que mais pode acontecer se o pneu for descartado de maneira incorreta.",
    answers: [
      { text: "A)	Os pombos vão transforma os pneus em uma linda casa.", correct: false},
      { text: "B)	Pode virar adubo para o solo, pois o pneu tem toxinas benéficas para o solo.", correct: false},
      { text: "C)	Vai contaminar o solo, pois tem toxinas que fazem mal para ele.", correct: true},
      { text: "D)	Vai filtrar água para os seres vivos beberem.", correct: false},
      ,]
  },
  
  {
  question: "Qual é a vida útil de um pneu? (Em KMs rodados).",
  answers: [
    { text: "A)	De 40 a 60 mil KMs.", correct: true},
    { text: "B)	De 70 a 90 mil KMs. ", correct: false},
    { text: "C)	De 10 a 30 mil KMs. ", correct: false},
    { text: "D)	De 50 a 80 mil KMs. ", correct: false},
    ,]
  },

  {
  question: "Qual é a maneira de reutilizar o pneu?",
  answers: [
    { text: "A)	Jogar em um rio. ", correct: false},
    { text: "B)	Jogar na rua e tampar um bueiro. ", correct: false},
    { text: "C)	Colocar em outro veículo.  ", correct: false},
    { text: "D)	Utilizar como vaso de planta. ", correct: true},
    ,]
  },

  {
  question: "O que pode acontecer se utilizarem o pneu “careca” em uma rodovia?",
  answers: [
    { text: "A)	O carro vai ganhar velocidade, pois vai ter uma aderência melhor. ", correct: false},
    { text: "B)	O carro vai ficar mais lento, pois o pneu “careca” gruda no chão e não deixa ele chegar a altas velocidades. ", correct: false},
    { text: "C)	Pode acontecer um acidente, pois a aderência do pneu fica menor. ", correct: true},
    { text: "D)	O carro ganha desempenho em terrenos com estradas de terra. ", correct: false},
    ,]
  },

  {
  question: "Leia o trecho a seguir e responda. “Nos EUA, lutava-se contra o acúmulo cada vez maior de pneus, por exemplo, até que uma “ideia brilhante” surgiu: “por que não criarmos um recife artificial feito com os pneus?” (Acesso em: https://www.megacurioso.com.br/ciencia/110101-erro-critico-a-historia-do-recife-que-seria-feito-com-pneus-descartados.htm 14/11/2023). O que essa idéia pode causar ao meio ambiente?",
    answers: [
    { text: "A)	Pode acabar com a vida próxima ao local, pois o pneu libera toxinas na área. ", correct: true},
    { text: "B)	Vai crescer vegetações no local, pois o pneu serve com adubo.", correct: false},
    { text: "C)	Vai crescer a população de animais na área, pois eles vão se alimentar dos pneus. ", correct: false},
    { text: "D)	Nenhuma das alternativas anteriores.  ", correct: false},
    ,]
  },

  {
  question: "O pneu verde, feito de cana, pode ser uma solução para a contaminação que os pneus de borracha vulcanizada causam?",
    answers: [
    { text: "A)	Sim, pois eles vão se decompor mais rápido já que são feito de um material não natural. ", correct: false},
    { text: "B)	Não, pois eles são feitos de um material natural.  ", correct: false},
    { text: "C)	Não, pois a cana vai causar mais poluição ao meio ambiente porque é feita de borracha sintética. ", correct: false},
    { text: "D)	Sim, pois a cana é um material natural. ", correct: true},
    ,]
  },

  {
  question: "Quais são os benéficios de transformar pneus em asfalto?",
    answers: [
    { text: "A)	Aumenta a durabilidade do asfalto. ", correct: true},
    { text: "B)	Reflete a luz solar, assim deixando o asfalto mais frio. ", correct: false},
    { text: "C)	Aumenta a drenagem de água do asfalto. ", correct: false},
    { text: "D)	Não tem nenhum benefício. ", correct: false},
    ,]
  },
];

const perguntaElement = document.getElementById("pergunta");
const respostaButtons = document.getElementById("respostas");
const proximoButton = document.getElementById("proxima-questão");

let perguntaCurrentIndex = 0;
let pontuação = 0;

function iniciarQuiz(){
  perguntaCurrentIndex = 0;
  pontuação = 0;
  proximoButton.innerHTML = "Próximo";
  mostrarQuestions();
}

function mostrarQuestions(){
  resetState();
  let perguntaCurrent = questions[perguntaCurrentIndex];
  let perguntaNo = perguntaCurrentIndex + 1;
  perguntaElement.innerHTML = perguntaNo + ". " + perguntaCurrent.question;

  perguntaCurrent.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("resposta-btn");
    respostaButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    
  });
}

function resetState(){
  proximoButton.style.display = "none";
  while(respostaButtons.firstChild){
    respostaButtons.removeChild(respostaButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    pontuação++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(respostaButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  proximoButton.style.display = "block";
}

function mostrarPontuação(){
  resetState();
  perguntaElement.innerHTML = "Você acertou " + pontuação + " de " + questions.length + "!";
  proximoButton.innerHTML = "Reiniciar";
  proximoButton.style.display = "block";
}

function handleProximaQuestão(){
  perguntaCurrentIndex++;
  if(perguntaCurrentIndex < questions.length){
    mostrarQuestions();
  }else{
    mostrarPontuação();
  }
}

  proximoButton.addEventListener("click", () => {
  if(perguntaCurrentIndex < questions.length){
    handleProximaQuestão();
  }else{
    iniciarQuiz();
  }

});

iniciarQuiz();