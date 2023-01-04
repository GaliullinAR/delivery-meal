let getMeal = document.querySelector('.registration__link');
let nav = document.querySelector('.menu__list');
let items = document.querySelectorAll('.item');

let itemsArr = Array.from(items);

getMeal.addEventListener('click', function (e) {
  e.preventDefault();
  itemsArr[0].style.display = 'none';
  itemsArr[1].style.display = 'block';
});


let lists = nav.querySelectorAll('.menu__list-item');
let listsArr = Array.from(lists);

function getIndex(list) {
  let result = null;
  list.forEach((item, index) => {
    if (item.classList.contains('active')) {
      result = index;
    }
  })
  return result;
}

listsArr.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let lastIdx = getIndex(listsArr);
    console.log(lastIdx);
    listsArr[lastIdx].classList.remove('active');
    e.currentTarget.classList.add('active');
  })
})