const characters = [
    //Lonely Wolf Treat
    { name: 'Treat', img: 'assets/treat.png', bgc: '#d4dfed', bgm: 'audios/lwt_dreaming_treat.ogg' },
    { name: 'Mochi', img: 'assets/mochi.png', bgc: '#d86793', bgm: 'audios/lwt_mochi.ogg' },
    { name: 'Moxie', img: 'assets/moxie.png', bgc: '#cbf8ff', bgm: 'audios/lwt_moxie.ogg' },

    // OneShot
    { name: 'Niko', img: 'assets/niko.png', bgc: '#11000e', bgm: 'audios/os_encounter.ogg' },
];

const groups = [
    {
        label: 'Lonely Wolf Treat',
        members: ['Treat', 'Mochi', 'Moxie']
    },
    {
        label: 'OneShot',
        members: ['Niko']
    }
];

const select = document.querySelector('select');
const selectnow = document.querySelector('select[name="1"]');

[select, selectnow].forEach(sel => {
    groups.forEach(group => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.label;
        group.members.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            optgroup.appendChild(option);
        });
        sel.appendChild(optgroup);
    });
});

const chrname = document.getElementById('chrname');
const bgm = document.getElementById('audio');

function show(index) {
    const chr = characters[index];

    document.body.style.backgroundColor = chr.bgc;

    bgm.src = chr.bgm;
    bgm.volume = 0.3;
    bgm.play();

    chrname.textContent = `You Chosed ${chr.name}!`;

    const chrimg = document.getElementById('chr');

    function changeImage(src) {
        chrimg.style.opacity = 0;
        setTimeout(() => {
            chrimg.src = src;
            chrimg.onload = () => {
                chrimg.style.opacity = 1;                
            }
        }, 200);
    }
    changeImage(chr.img);
}

document.getElementById('start').addEventListener('click', () => {
    const stage = document.createElement('div');
    stage.id = 'stage';
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(stage);
        new Swing(stage).run();
    }

    show(select.selectedIndex);

    const prepare = document.getElementById('prepare');
    prepare.style.opacity = '0';
    setTimeout(() => prepare.remove(), 1000);
});

selectnow.addEventListener('change', () => {
    show(selectnow.selectedIndex);
});
