let getMeal = document.querySelector('.registration__link');

let items = document.querySelectorAll('.item');

let array = Array.from(items);

getMeal.addEventListener('click', function (e) {
  e.preventDefault();
  items[0].style.display = 'none';
  items[1].style.display = 'block';
})