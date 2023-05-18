function backToTop() {
    let button = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= 50) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  
    button.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  backToTop();


function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', week: 'long' };
  return date.toLocaleDateString('ru-RU', options);
}

const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  const dateAdded = new Date(card.dataset.dateAdded);
  const formattedDate = formatDate(dateAdded);
  const dataElement = card.querySelector('.date-added');
  if (dataElement) {
    dataElement.innerHTML = `Дата: ${formattedDate}`;
  }
});


const productCardsItem = document.querySelectorAll('.product-card-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalHeading = document.getElementById('modal-heading');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.getElementById('close-btn');

productCardsItem.forEach(function(card) {
  const buyBtn = card.querySelector('.buy-btn');
  const name = buyBtn.getAttribute('data-name');
  const price = buyBtn.getAttribute('data-price');
  const imgSrc = card.querySelector('img').getAttribute('src');

  buyBtn.addEventListener('click', () => {
    modalImg.setAttribute('src', imgSrc);
    modalHeading.textContent = name;
    modalPrice.textContent = `${price} ₽`;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-theme");
  var header = document.querySelector('header');
  header.classList.toggle('dark-theme');
};

const closeButton = document.getElementById('close-btn-cross');

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);

const btnAlert = document.getElementById('close-btn');
btnAlert.addEventListener('click', () => {
  alert('Товар добавлен в корзину!');
});


const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('menu-open');
});
