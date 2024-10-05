const messageText = `Sinh nhật vui vẻ!
Chúc bạn sẽ luôn tỏa sáng như ánh mặt trời,
mang lại niềm vui và ánh sáng cho những người xung quanh.
Hy vọng rằng năm mới sẽ đem đến cho bạn thật nhiều may mắn và hạnh phúc!`;

const messageLines = messageText.split('\n');
let lineIndex = 0;

function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.visibility = 'visible';
    messageElement.innerHTML = '';

    const interval = setInterval(() => {
        if (lineIndex < messageLines.length) {
            messageElement.innerHTML += messageLines[lineIndex] + '<br>';
            lineIndex++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function createBalloons() {
    const balloonContainer = document.querySelector('.balloons');
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloonContainer.appendChild(balloon);
    }
}

window.onload = createBalloons;
