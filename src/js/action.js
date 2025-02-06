// variaveis para função começar
let oneSection = document.getElementById('one-section');
let twoSection = document.getElementById('two-section');
let comecar = document.getElementById('start');
let timerInterval;
// clicou no botao começar
comecar.addEventListener('click', () => {
    
    // 1° pag oculta
    oneSection.style.display = 'none';

    // 2° pag visivel
    twoSection.style.display = 'block';
    startTimer();

    let label = document.getElementById('label');
    label.innerHTML = `entre <strong>0</strong> a <strong>${numeroMax}</strong>`;

});


let oneBox = document.getElementById('one-box');
let twoBox = document.getElementById('two-box');
let balao = document.getElementById('balao');
let home = document.getElementById('home');
let numeroMax = 20;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
// console.log(`Número Secreto: ${numeroSecreto}`);
let tentativas = 0;

let tempoSection = document.getElementById('tempo-section');
// ao clicar no botao home na area do time
let home2 = document.getElementById('home2');
    home2.addEventListener('click', () => {
        location.replace('index.html');

    })

// função de timer
function startTimer() {
    let timeLeft = 30;
    let timerElement = document.getElementById("timer");

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timerElement.textContent = timeLeft;

        if (timeLeft === 0) {
            tempoSection.style.display = 'block';
            twoSection.style.display = 'none';
            clearInterval(timerInterval);
        }

        timeLeft--;
    }, 1000);
}

// função pra checar o numero secreto
function numSecret() {
    let optionNumber = document.getElementById('number-secret');
    let number = Number(optionNumber.value);
    let numberInput = optionNumber.value.trim();

    if (numberInput === "") {
        balao.style.display = 'block';
        balao.innerHTML = `⚠️ Digite um número antes de verificar!`;
        oneBox.style.display = 'none';
        twoBox.style.display = 'block';
        home.addEventListener('click', () => {
            oneBox.style.display = 'none';
            twoBox.style.display = 'none';
            balao.style.display = 'none';
            });

        return;
    }

    tentativas++;

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";


    if (number === numeroSecreto) {
        twoBox.style.display = 'none';
        oneBox.style.display = 'block';
        balao.style.display = 'block';
        balao.innerHTML = `✅ Acertou!<br>
        O <strong>${numeroSecreto}</strong> é o número secreto!<br>
        Você descobriu com <strong>${tentativas}</strong> ${palavraTentativa}!`;

        document.getElementById('home').value = 'home';       

        home.addEventListener('click' , () => {
            location.href = 'index.html';
        });

        clearInterval(timerInterval);

    } else if(number < numeroSecreto) {
        oneBox.style.display = 'none';
        twoBox.style.display = 'block';
        balao.style.display = 'block';
        balao.innerHTML = `❌ Tente novamente!<br>
        O número secreto é maior que <strong>${number}</strong>!`;
        home.addEventListener('click', () => {
            twoBox.style.display = 'none';
            balao.style.display = 'none';
            });

    } else if(number > numeroMax ){
        oneBox.style.display = 'none';
        twoBox.style.display = 'block';
        balao.style.display = 'block';
        balao.innerHTML = `❌ ERROR!<br>
        O numero não está entre <strong>0</strong> a <strong>${numeroMax}</strong>!`;
        home.addEventListener('click', () => {
            twoBox.style.display = 'none';
            balao.style.display = 'none';
            })
    } else {
        oneBox.style.display = 'none';
        twoBox.style.display = 'block';
        balao.style.display = 'block';
        balao.innerHTML = `❌ Tente novamente!<br>
        O número secreto é menor que <strong>${number}</strong>!`;
        home.addEventListener('click', () => {
            twoBox.style.display = 'none';
            balao.style.display = 'none';
            })
    }
}

let optionNumber = document.getElementById('number-secret');
// função ao clicar no botão enter do teclado ou mobile
optionNumber.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        numSecret();
        // não permite a pagina carregar
        event.preventDefault();
    }
});

// função ao clicar no botão limpar do teclado ou mobile
optionNumber.addEventListener("input", function () {
    if (optionNumber.value === "") {
        twoBox.style.display = 'none';
        balao.style.display = 'none';
    }
});

// clicar no botão verificar
let verificar = document.getElementById('check')
verificar.addEventListener('click', () => {
    numSecret();    
});


// mudar o icone do footer
let change = document.getElementById('change');
let mudar = document.getElementById('mudar');
mudar.addEventListener('mouseover', () => {
    change.innerHTML = '👽';
})

mudar.addEventListener('mouseout', () => {
    change.innerHTML = '👨🏻‍💻';
})