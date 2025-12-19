// script.js
// Script sederhana untuk animasi sparkle pada hiasan (opsional, untuk kesan lucu)
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk membuat animasi sparkle pada SVG
    const decorations = document.querySelectorAll('.decorations svg');
    
    decorations.forEach(svg => {
        svg.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        svg.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Opsional: Tambahkan confetti sederhana saat halaman load (menggunakan CSS animation)
    // Ini hanya untuk kesan lucu, bisa dihapus jika tidak perlu
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(confetti);
    }
    
    // Kontrol backsound
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    
    playButton.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false; // Unmute
            audio.play();
            playButton.textContent = 'Pause Music';
        } else {
            audio.pause();
            playButton.textContent = 'Play Music';
        }
    });
    
    // Coba autoplay saat load (dengan muted)
    audio.play().catch(() => {
        // Jika autoplay diblokir, tunggu klik tombol
        console.log('Autoplay blocked, use button to play.');
    });
});

// CSS untuk confetti (tambahkan ke style.css jika ingin)
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: absolute;
        top: -10px;
        width: 10px;
        height: 10px;
        background-color: #FF69B4;
        animation: fall 3s linear infinite;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
