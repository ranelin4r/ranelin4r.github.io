var characters = [
    { "name": "Treat（未完工）", "src": "assets/treat.png", "bgc": "#d4dfed", "bgm": "sounds/bg/dreaming treat.ogg" },
    { "name": "Mochi", "src": "assets/mochi.png", "bgc": "#d86793", "bgm": "sounds/bg/mochi.ogg" },
    { "name": "Moxie", "src": "assets/moxieeeeeeeee.png", "bgc": "#cbf8ff", "bgm": "sounds/bg/moxie.ogg" },
];

var select = document.getElementById("select");

characters.forEach((character) => {
    var option = document.createElement("option");
    option.value = character.name;
    option.textContent = character.name;
    select.appendChild(option);
});

document.getElementById("button").addEventListener("click", () => {
    document.getElementById('prepare').style.opacity = '0';
    setTimeout(()=>{
        document.body.removeChild(document.getElementById('prepare'));
    },1000);
    document.body.style.backgroundColor = characters[select.selectedIndex].bgc;

    const container = document.querySelector('.stage');
    const avatar = new Swing(container, characters[select.selectedIndex].src);
    avatar.run();

    const bgm = document.getElementById('bgm');
    bgm.src = characters[select.selectedIndex].bgm;
    bgm.volume = 0.3;
    bgm.play();
})