const choices = document.querySelectorAll('.options button');
for (const choice of choices) {
  choice.addEventListener('click', () => {
    for (const button of choices) button.setAttribute('aria-pressed', String(button === choice));
    const shot = document.querySelector('figure img');
    shot.src = choice.dataset.src;
    shot.alt = choice.textContent;
    document.querySelector('figcaption').textContent = choice.dataset.caption;
  });
}
