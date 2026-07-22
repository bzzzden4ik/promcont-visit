const headerContacts = document.querySelector('.header__contacts');
const navContainer = document.querySelector('.header__nav-container.hidden');
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navContainer.classList.remove('hidden');
    } else {
      navContainer.classList.add('hidden');
    }
  });
};
const observer = new IntersectionObserver(observerCallback, {
  threshold: 0
});
observer.observe(headerContacts);

const buttons = document.querySelectorAll('.overlay__button')
const overlay = document.querySelector('.overlay')
buttons.forEach(button => {
  button.addEventListener('click', event => {
    overlay.classList.add('show')
  })
})

