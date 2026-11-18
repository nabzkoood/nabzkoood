const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuToggle.addEventListener('click', () => mobileNav.classList.toggle('open'));

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
function filterProducts(category) {
  productCards.forEach(card => {
    card.style.display = category === 'همه' || card.dataset.category === category ? '' : 'none';
  });
  filterButtons.forEach(btn => btn.classList.toggle('selected', btn.dataset.filter === category));
}
filterButtons.forEach(btn => btn.addEventListener('click', () => filterProducts(btn.dataset.filter)));
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.filter;
    filterProducts(category);
  });
});

let cartCount = 0;
const countEl = document.querySelector('#cart-count');
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount += 1;
    countEl.textContent = new Intl.NumberFormat('fa-IR').format(cartCount);
    showToast('محصول به سبد خرید اضافه شد.');
  });
});
document.querySelectorAll('.heart').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    button.textContent = button.classList.contains('liked') ? '♥' : '♡';
    showToast(button.classList.contains('liked') ? 'به علاقه‌مندی‌ها اضافه شد.' : 'از علاقه‌مندی‌ها حذف شد.');
  });
});
document.querySelector('#newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  showToast('ممنون! عضویت نمایشی شما ثبت شد.');
  event.target.reset();
});
document.querySelector('.search-toggle').addEventListener('click', () => {
  const term = prompt('نام محصول موردنظر را وارد کنید:');
  if (!term) return;
  const match = [...productCards].find(card => card.textContent.toLowerCase().includes(term.trim().toLowerCase()));
  if (match) {
    productCards.forEach(card => card.style.display = card === match ? '' : 'none');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector('#products').scrollIntoView({behavior:'smooth'});
  } else {
    showToast('محصولی با این نام پیدا نشد.');
  }
});
document.querySelector('.cart-toggle').addEventListener('click', () => showToast(`تعداد محصولات سبد خرید: ${new Intl.NumberFormat('fa-IR').format(cartCount)} عدد`));
