
        const loveLetter = "My Cutie Pie, \n\nOn this special day, I just want to remind you how incredibly important you are to me. Every moment with you feels like magic. Thank you for being my partner, my best friend, and my greatest love. I hope this year brings you as much joy as you bring to my life. I love you more than words can say. ❤️";

    
        function triggerConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff9a9e', '#fad0c4', '#ffccd5']
            });
        }
   
        window.addEventListener('load', () => {
            triggerConfetti();
            createFloatingHearts();
        });


        document.addEventListener('click', (e) => {
            if(e.target.tagName !== 'BUTTON' && !e.target.closest('.music-toggle')) {
                confetti({
                    particleCount: 15,
                    spread: 40,
                    origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
                    colors: ['#ff9a9e', '#ffd700']
                });
            }
        });


        function revealSurprise() {
            const box = document.getElementById('surpriseBox');
            const textElement = document.getElementById('typewriterText');
            
            box.style.display = 'block';
            triggerConfetti(); 
            
     
            let i = 0;
            textElement.innerHTML = '';
            function typeWriter() {
                if (i < loveLetter.length) {
                    if(loveLetter.charAt(i) === '\n') {
                        textElement.innerHTML += '<br>';
                    } else {
                        textElement.innerHTML += loveLetter.charAt(i);
                    }
                    i++;
                    setTimeout(typeWriter, 50); 
                }
            }
            typeWriter();
            

            box.scrollIntoView({ behavior: 'smooth' });
        }

  
        const music = document.getElementById('bgMusic');
        const toggleBtn = document.getElementById('musicToggle');
        let isPlaying = false;

        function toggleMusic() {
            if (isPlaying) {
                music.pause();
                toggleBtn.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                music.play();
                toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        }


        document.addEventListener('mousemove', function(e) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });


        function createFloatingHearts() {
            const container = document.getElementById('bg-hearts');
            const symbols = ['❤', '✨', '🌸', '💖'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart-bg');
                heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
                
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';
                heart.style.animationDuration = Math.random() * 3 + 4 + 's';
                
                container.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 7000);
            }, 500);
        }