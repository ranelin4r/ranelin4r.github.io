const FRAME = 1000 / 60;

const TOUCH_EVENT = 1, MOUSE_EVENT = 2;

const EVENT_TYPE = {
    touchstart: TOUCH_EVENT,
    touchmove: TOUCH_EVENT,
    touchend: TOUCH_EVENT,
  
    mousedown: MOUSE_EVENT,
    mousemove: MOUSE_EVENT,
    mouseup: MOUSE_EVENT,
    mouseleave: MOUSE_EVENT
};

const rotatePoint = (cx, cy, x, y, angle) => {
    const radians = (Math.PI / 180) * angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return { x: nx, y: ny };
};

class Swing {
    constructor(container, character) {
        this.count = 0;
        this.v = { r: 12, y: 2, t: 0, w: 0, d: 0.988 };
        this.inertia = 0.08;
        this.sticky = 0.1;
        this.maxR = 60;
        this.maxY = 110;
        this.last = null;
        this.rotate = 0;
        this.initiated = false;
        this.pageX = 0;
        this.pageY = 0;
        this.container = container;
        this.height = 800;
        this.width = 500;

        this.audio = {
            transient: new Audio('sounds/bounce1.mp3'),
            dancing: new Audio('sounds/bounce2.mp3'),
            crazy: new Audio('sounds/bounce3.mp3')
        };

        this.container.style.height = this.height + 'px';
        this.container.style.width = this.width + 'px';

        this.image = new Image(197, 300);
        this.image.src = character;

        this.outline = document.createElement('div');
        this.outline.style.position = 'absolute';
        this.outline.style.left = '50%';
        this.outline.style.top = '50%';
        this.outline.style.transform = 'translate(-50%, -50%)';
        this.outline.appendChild(this.image);

        const dpr = window.devicePixelRatio || 1;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';

        this.context = this.canvas.getContext('2d');
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.scale(dpr, dpr);

        this.mount();
    }

    mount() {
        this.outline.addEventListener('mousedown', this.start.bind(this));
        this.outline.addEventListener('touchstart', this.start.bind(this));
        ['mousemove', 'touchmove'].forEach(event => {
            document.addEventListener(event, this.move.bind(this));
        });
        ['mouseup', 'mouseleave', 'touchcancel', 'touchend'].forEach(event => {
            document.addEventListener(event, this.end.bind(this));
        });

        this.container.appendChild(this.outline);
        this.container.appendChild(this.canvas);
    }


    start(event) {
        event.preventDefault();
        const eventType = EVENT_TYPE[event.type];
        if (this.initiated && this.initiated !== eventType) {
            return;
        }
        this.initiated = eventType;

        const touch = 'targetTouches' in event ? event.touches[0] : event;
        this.pageX = touch.pageX;
        this.pageY = touch.pageY;
    }

    move(event) {
        if (EVENT_TYPE[event.type] !== this.initiated) {
            return;
        }

        const touch = 'targetTouches' in event ? event.touches[0] : event;
        const rect = this.image.getBoundingClientRect();
        const leftCenter = rect.left + rect.width / 2;
        const { pageX, pageY } = touch;

        const x = pageX - leftCenter;
        let y = pageY - this.pageY;

        let r = x * this.sticky;
        r = Math.max(-this.maxR, r);
        r = Math.min(this.maxR, r);

        y = y * this.sticky * 3;
        y = Math.max(-this.maxY, y);
        y = Math.min(this.maxY, y);

        this.v.r = r;
        this.v.y = y;
        this.v.w = 0;
        this.v.t = 0;

        this.draw();
    }

    end(event) {
        if (EVENT_TYPE[event.type] !== this.initiated) {
            return;
        }
        this.initiated = false;
        this.run();
        this.play();
    }

    play() {
        this.count++;

        const { transient, dancing, crazy } = this.audio;
        if (this.count > 2) {
            this.count = 0;
            crazy.currentTime = 0;
            crazy.play();
        } else if (Math.abs(this.v.r) <= 6) {
            transient.currentTime = 0;
            transient.play();
        } else if (Math.abs(this.v.r) > 6 && Math.abs(this.v.r) <= 30) {
            dancing.currentTime = 0;
            dancing.play();
        } else if (Math.abs(this.v.r) > 30) {
            crazy.currentTime = 0;
            crazy.play();
        }
    }

    draw() {
        const { r, y } = this.v;
        const x = r * 5;
        this.image.style.transform = `rotate(${r}deg) translateX(${x}px) translateY(${y}px)`;

        const { context, width, height } = this;

        context.clearRect(0, 0, width, height);
        context.save();

        context.strokeStyle = '#333';
        context.lineWidth = 10;

        context.beginPath();
        context.translate(width / 2, 640);
        context.moveTo(0, 200);

        const cx = 0;
        const cy = -100;

        const n = rotatePoint(cx, cy, r, -y, r);
        const nx = n.x;
        const ny = -n.y - 100;

        context.quadraticCurveTo(0, 75, nx, ny);
        context.stroke();
        context.restore();
    }

    run() {
        if (this.initiated) {
            return;
        }

        const now = Date.now();
        let i = this.inertia;
        const delta = this.last ? now - this.last : 16;
        if (delta < 16) {
            i = i / FRAME * delta;
        }
        this.last = now;

        let { r, y, t, w, d } = this.v;

        w = w - r * 2 - this.rotate;
        r = r + w * i * 1.2;
        this.v.w = w * d;
        this.v.r = r;

        t = t - y * 2;
        y = y + t * i * 2;
        this.v.t = t * d;
        this.v.y = y;

        if (Math.max(Math.abs(this.v.w), Math.abs(this.v.r), Math.abs(this.v.t), Math.abs(this.v.y)) < 0.1) {
            return;
        }

        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }
}

