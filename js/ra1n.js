class Rainbow {
    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    background() {
        setInterval(() => {
            document.body.style.backgroundColor = this.randomColor();
        }, 4000);
    }
}

class Text {
    textRainEffect() {
        setInterval(() => {
            this.startTextRain();
        }, 200);
    }

    startTextRain() {
        const rain = ['⛆'];

        const rainEle = document.querySelector(".textRain");
        if (!rainEle) {
            console.error("Element with class 'textRain' not found in the DOM.");
            return;
        }

        const textEle = document.createElement("div");

        textEle.innerText = rain[Math.floor(Math.random() * rain.length)];
        textEle.classList.add("text");

        const styleSheets = {
            left: `${Math.max(0, Math.floor(Math.random() * (window.innerWidth - 40)))}px`,
            fontSize: `${0.5 + Math.random() * 1.5}em`,
            animationDuration: `${5 + Math.random()}s`,
        };

        Object.assign(textEle.style, styleSheets);

        rainEle.appendChild(textEle);

        setTimeout(() => {
            rainEle.removeChild(textEle);
        }, 5000);
    }
}

const rainbow = new Rainbow();
rainbow.background();
document.body.style.transition = 'background-color 4s ease-in-out';

const textEffect = new Text();
textEffect.textRainEffect();
