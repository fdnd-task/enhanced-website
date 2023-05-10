 // create confetti canvas
  var confettiCanvas = document.getElementById("confetti");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  // create confetti context
  var confettiContext = confettiCanvas.getContext("2d");

  // create confetti particles
  var confettiParticleCount = 100;
  var confettiParticles = [];
  for (var i = 0; i < confettiParticleCount; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width, // random x position
      y: Math.random() * confettiCanvas.height, // random y position
      size: Math.random() * 10 + 5, // random size between 5 and 15
      vx: Math.random() * 2 - 1, // random x velocity between -1 and 1
      vy: Math.random() * 5 + 1, // random y velocity between 1 and 6
      color: "#" + ((1 << 24) * Math.random() | 0).toString(16), // random color
    });
  }

  // draw confetti particles
  function drawConfetti() {
    confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (var i = 0; i < confettiParticleCount; i++) {
      var particle = confettiParticles[i];
      confettiContext.beginPath();
      confettiContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      confettiContext.fillStyle = particle.color;
      confettiContext.fill();
      // update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      // check for out-of-bounds particles
      if (particle.x < -50 || particle.x > confettiCanvas.width + 50 || particle.y > confettiCanvas.height + 50) {
        particle.x = Math.random() * confettiCanvas.width;
        particle.y = -50;
      }
    }
    // animate confetti
    requestAnimationFrame(drawConfetti);
  }

  // start confetti animation
  window.addEventListener("load", function() {
    drawConfetti();
  });