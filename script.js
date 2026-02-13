const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#destinationGrid .card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

if (subscribeForm && emailInput && formMessage) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = `Thanks, ${emailInput.value}! You'll get exclusive deals soon.`;
    subscribeForm.reset();
  });
}
