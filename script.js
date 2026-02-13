const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseDiv = document.getElementById('response');

let noClickCount = 0;
let ambientAudio = null;

const yesResponses = [
    '🎉 YES! You just made me the happiest! 💕',
    '💗 Yay! I am so happy right now! 🌟',
    '❤️ You said YES! This is amazing! 💑',
    '🎊 You\'ve made my day! Forever with you! 💕'
];

const noResponses = [
    'You\'re such a tease! 😄 Try clicking YES',
    'Let me ask again... 💭',
    'Are you sure about that? 👀',
    'Come on, you know you want to say YES! 😉',
    'Don\'t be shy! 💫',
    'I know you want to! 🥰',
    'The YES button is right there... 👉💕',
    'Stop playing hard to get! 😏',
    'You\'re making me blush! 🥺',
    'Just one little YES? 🙏',
    'I\'m waiting... 💔',
    'Pretty please with hearts on top? 💖',
    'This is getting exciting! 🌟',
    'Can\'t you see the YES button growing? 👀',
    'I believe in you! You can do it! 💪',
    'One more click and say YES! 💗'
];

// Canvas for animated background
function initializeBackground() {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Add floating bears to background
function addFloatingBears() {
    const bearContainer = document.getElementById('bearContainer');
    const bearEmojis = ['🧸', '🐻', '🐼', '🧸'];
    const numberOfBears = 6;
    
    for (let i = 0; i < numberOfBears; i++) {
        const bear = document.createElement('div');
        bear.className = 'floating-bear';
        bear.textContent = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
        
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 5;
        
        bear.style.left = randomX + 'px';
        bear.style.top = window.innerHeight + 'px';
        bear.style.animationDelay = randomDelay + 's';
        bear.style.animationDuration = (12 + Math.random() * 8) + 's';
        
        bearContainer.appendChild(bear);
    }
}

// Handle Yes button: show celebration then navigate to success page
// small delay so user sees confetti and hears sound before redirect
// Navigate to success.html (relative path)
// NOTE: ensure success.html exists in same folder.
// Handle Yes button
yesBtn.addEventListener('click', () => {
    const response = yesResponses[Math.floor(Math.random() * yesResponses.length)];
    responseDiv.innerHTML = `<div style="font-size: 2rem; margin-bottom: 20px;">✨💕✨</div><div>${response}</div>`;
    responseDiv.style.display = 'flex';

    yesBtn.disabled = true;
    noBtn.disabled = true;
    yesBtn.style.opacity = '0.6';
    noBtn.style.opacity = '0.6';

    createConfetti();
    playSound();

    // after a short celebration, go to success page
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 900);
});

// Handle No button - it runs away
noBtn.addEventListener('click', (e) => {
    noClickCount++;
    
    noBtn.classList.add('scared');
    setTimeout(() => noBtn.classList.remove('scared'), 200);
    
    if (noClickCount <= noResponses.length) {
        responseDiv.innerHTML = noResponses[noClickCount - 1];
        responseDiv.style.display = 'flex';
    }
    
    // Make "No" button move away
    const randomX = (Math.random() - 0.5) * 250;
    const randomY = (Math.random() - 0.5) * 250;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Increase "Yes" button size
    const currentScale = parseFloat(yesBtn.dataset.scale) || 1;
    const newScale = currentScale + 0.12;
    yesBtn.dataset.scale = newScale;
    yesBtn.style.transform = `scale(${newScale})`;
});

function createConfetti() {
    const confettiPieces = 40;
    const emojis = ['💕', '✨', '🎉', '💗', '🌹', '💝', '🎊'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = Math.random() * 25 + 20 + 'px';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.zIndex = 999;
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2000 + 2500;
        const xMove = (Math.random() - 0.5) * 500;
        const yMove = Math.random() * 600 + 400;
        
        confetti.animate([
            {
                transform: `translate(0, 0) rotate(0deg) scale(1)`,
                opacity: 1
            },
            {
                transform: `translate(${xMove}px, ${yMove}px) rotate(720deg) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}

function playSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Initialize
window.addEventListener('load', () => {
    initializeBackground();
    addFloatingBears();
    playAmbientMusic();
});

// Play soft ambient music in background
function playAmbientMusic(){
    try{
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        ambientAudio = ctx;
        
        // Create low ambient pad
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.value = 110; // A2
        osc1.connect(gain1);
        
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.value = 165; // E3
        osc2.connect(gain2);
        
        const masterGain = ctx.createGain();
        gain1.connect(masterGain);
        gain2.connect(masterGain);
        masterGain.connect(ctx.destination);
        
        gain1.gain.setValueAtTime(0.01, ctx.currentTime);
        gain2.gain.setValueAtTime(0.008, ctx.currentTime);
        masterGain.gain.setValueAtTime(0.02, ctx.currentTime);
        
        osc1.start();
        osc2.start();
    }catch(e){
        console.log('Audio context not available');
    }
}
