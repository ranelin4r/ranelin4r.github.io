function textRainEffect() {
    setInterval(() => {
        startTextRain();
    },100)
}

var rain = [
    '😂',
    '💎',
    '👍',
    '🍮',
    '🌈',
    '❤',
    '🥝',
    '🎓',
    '🔔',
    '✨',
    '💧',
    '☕',
    '📝',
    '❄',
];

function startTextRain() {
    var rainEle = document.querySelector(".textRain");
    var textEle = document.createElement("div");

    textEle.innerText = rain[Math.floor(Math.random() * rain.length)];
    textEle.classList.add("text");

    var styleSheets = {
        left: `${Math.floor(Math.random() * window.innerWidth - 40)}px`,
        fontSize: `${0.5 + Math.random() * 1.5}em`,
        animationDuration: `${5 + Math.random()}s`,
    };

    Object.assign(textEle.style, styleSheets);

    rainEle.appendChild(textEle);

    setTimeout(() => {
        rainEle.removeChild(textEle);
    }, 5000);
};

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

function background(){
    setInterval(()=>{
        document.body.style.backgroundColor = randomColor();
    },4000);
};

textRainEffect();
background();
