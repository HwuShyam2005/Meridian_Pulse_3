(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progressEl = document.getElementById('progress');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let current = 0;

  function revealListFor(slide) {
    return Array.from(slide.querySelectorAll('.reveal-list li'));
  }

  function resetReveals(slide) {
    revealListFor(slide).forEach(li => li.classList.remove('shown'));
  }

  function nextHiddenItem(slide) {
    return revealListFor(slide).find(li => !li.classList.contains('shown'));
  }

  function showSlide(index, opts) {
    opts = opts || {};
    slides[current].classList.remove('active');
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides[current].classList.add('active');
    progressEl.textContent = (current + 1) + ' / ' + slides.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;

    // Reveal bullets progressively rather than dumping them all at once,
    // unless we arrived here going backwards (opts.fromBack), in which case
    // show everything so the slide doesn't look broken.
    const items = revealListFor(slides[current]);
    if (items.length) {
      if (opts.fromBack) {
        items.forEach(li => li.classList.add('shown'));
      } else {
        resetReveals(slides[current]);
      }
    }
  }

  function advance() {
    const hidden = nextHiddenItem(slides[current]);
    if (hidden) {
      hidden.classList.add('shown');
      return;
    }
    if (current < slides.length - 1) showSlide(current + 1);
  }

  function retreat() {
    if (current > 0) showSlide(current - 1, { fromBack: true });
  }

  nextBtn.addEventListener('click', advance);
  prevBtn.addEventListener('click', retreat);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); advance(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); retreat(); }
  });

  showSlide(0);
})();
