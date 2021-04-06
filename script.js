const panels = document.querySelectorAll('.panel');

panels.forEach((i) => {
  i.addEventListener('click', () => {
    removeActiveClasses(panels);
    i.classList.add('active');
  });
});

function removeActiveClasses(panels) {
  panels.forEach((i) => {
    i.classList.remove('active');
  });
}
