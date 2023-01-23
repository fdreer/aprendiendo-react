import confetti from 'canvas-confetti';

export default function fireworks() {
  let duration = 20 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = {startVelocity: 30, spread: 150, ticks: 300, zIndex: 0};

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2},
      })
    );
  }, 250);
}
