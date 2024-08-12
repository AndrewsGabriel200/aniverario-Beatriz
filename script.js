const messages = [
    "Oi Bea, eu sou o Harry. Soube que é seu aniversário, então vim aqui para passar uma mensagem do seu amigo Andrews.",
    "Ele me disse que agradece muito por ter conhecido alguém incrível, inteligente e esforçada como você.",
    "Que é graças a você que ele tenta fazer um bom trabalho todos os dias na GECOB, pois 95% ou até mesmo 100% de tudo que ele sabe, você ensinou.",
    "Ele também falou que ama aquele momento do dia em que diz 'Oi Beaaa' e vê o sorriso lindo que você tem.",
    "Também me contou que, embora possa não ser muito bom com palavras e às vezes pareça um pouco estranho e calado,",
    "ele se sente muito feliz por ter sua amizade e acho que ele gostaria de saber se você sente o mesmo.",
    "Então é isso, Bea. Parabéns pelo seu dia e que venham muitos outros aniversários,",
    "mais antes de ir um poema de adeus,",
    "Adeus, Joven Bruxa No castelo de Hogwarts, onde a magia é real, Nos despedimos agora,",
    "com um toque especial. Os feitiços da amizade, com sua luz, brilham, Mesmo que separados, nossos corações não se afastam,",
    "Que a varinha da sorte te guie com precisão, Como um feitiço lançado com pura intenção,",
    "Que as estrelas de Grifinória ilumine seu caminho, E os segredos de Sonserina te tragam um destino,",
    "Ao partir para novas aventuras e mistérios, Que os encantos de Corvinal tragam novos critérios,",
    "E que as descobertas de Lufa-Lufa sejam sempre verdadeiras, Como a lealdade e a coragem das mais nobres maneiras.",
    "Adeus, por ora, mas lembre-se sempre, Que a magia que compartilhamos é um eterno presente;",
    "Nos veremos novamente, seja em sonhos ou feitiços, Na próxima trama de nossas vidas, repleta de encantos e riscos.",
    "Beijos e abraços Beatriz ❤❤❤,"
];

let currentMessageIndex = -1; // Inicialize com -1 para exibir a primeira mensagem no primeiro clique
let nightMode = false;
let nightTimeout;
const wrapper = document.querySelector('.wrapper');
const clouds = document.querySelectorAll('.cloud');
const speechBubble = document.getElementById('speechBubble');
const messageElement = document.getElementById('message');
const changeMessageButton = document.getElementById('changeMessage');

// Esconder o balão de mensagem ao carregar a página
speechBubble.style.display = 'none';

function changeMessage() {
    currentMessageIndex++;

    if (currentMessageIndex >= messages.length) {
        speechBubble.style.display = 'none';
        currentMessageIndex = -1; // Reinicie para que a próxima mensagem seja a inicial

        if (nightMode) {
            setTimeout(deactivateNightMode, 100); // Amanhecer após 1 milissegundo
        }
    } else {
        speechBubble.style.display = 'block';
        messageElement.textContent = messages[currentMessageIndex];
        resetNightTimeout();
    }
}

function activateNightMode() {
    if (!nightMode) {
        wrapper.classList.add('night');
        clouds.forEach(cloud => {
            cloud.classList.add('night'); // Adiciona a classe 'night' às nuvens
        });
        speechBubble.style.display = 'block';
        messageElement.textContent = 'Nossa, já está escurecendo e você esqueceu de apertar o botão, hehe.';
        nightMode = true;
    }
}

function deactivateNightMode() {
    wrapper.classList.remove('night');
    clouds.forEach(cloud => {
        cloud.classList.remove('night');
    });
    nightMode = false;
    resetNightTimeout(); // Reinicia o ciclo de dia/noite
}

function resetNightTimeout() {
    clearTimeout(nightTimeout);
    nightTimeout = setTimeout(activateNightMode, 20000); // Reativa o modo noturno após 20 segundos
}

// Iniciar o temporizador de 20 segundos assim que a página carregar
window.addEventListener('load', function () {
    resetNightTimeout();
});

// Inicialize a primeira mensagem ao clicar no botão
changeMessageButton.addEventListener('click', changeMessage);
