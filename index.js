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

const template_1 = document.querySelector('#template_1')
const template_2 = document.querySelector('#template_2')
const template_3 = document.querySelector('#template_3')

const buttons = document.querySelectorAll('.overlay__button')
const overlay = document.querySelector('.overlay')
const overlayClose = document.querySelector('.overlay__close')
buttons.forEach(button => {
  button.addEventListener('click', event => {
    overlay.classList.add('show')
    const value_1 = document.querySelector('#value_1').value
    const value_2 = document.querySelector('#value_2').value
    const value_3 = document.querySelector('#value_3').value
    template_1.value = value_1
    template_2.value = value_2
    template_3.value = value_3
  })
})
overlayClose.addEventListener('click', event => {
  overlay.classList.remove('show')
})