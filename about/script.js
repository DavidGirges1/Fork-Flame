document.addEventListener('DOMContentLoaded', () => {
  const countersSection = document.querySelector('.counters');
  if (!countersSection) return;

  const spans = countersSection.querySelectorAll('.counter span');
  let started = false;

  const animate = (span, target) => {
    let count = 0;
    const step = Math.ceil(target / 100);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      span.textContent = count;
    }, 20);
  };

  const handleScroll = () => {
    const rect = countersSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !started) {
      started = true;
      spans.forEach(span => {
        const target = parseInt(span.textContent);
        if (!isNaN(target)) {
          span.textContent = '0';
          animate(span, target);
        }
      });
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
