let getMeal = document.querySelector('.registration__link');
let nav = document.querySelector('.menu__list');
let items = document.querySelectorAll('.item');
let wrapper = document.querySelector('.wrapper');
let wrapperChildsArr = Array.from(wrapper.querySelectorAll('.item'));
let itemsArr = Array.from(items);

getMeal.addEventListener('click', function (e) {
  e.preventDefault();
  itemsArr[0].style.display = 'none';
  itemsArr[1].style.display = 'block';
});


let lists = nav.querySelectorAll('.menu__list-item');
let listsArr = Array.from(lists);

function getIndex(list) {
  return list.findIndex(item => {
    if (item.classList.contains('active')) {
      return item;
    }
  })
  
}

let currentIndex = getIndex(listsArr);
wrapperChildsArr[currentIndex].style.display = 'block';

listsArr.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let lastIdx = getIndex(listsArr);
    console.log(lastIdx);
    listsArr[lastIdx].classList.remove('active');
    e.currentTarget.classList.add('active');

    let currentIdx = listsArr.findIndex(item => {
      if (item.classList.contains('active')) {
        return item;
      }
    })

    wrapperChildsArr[lastIdx].style.display = 'none';
    wrapperChildsArr[currentIdx].style.display = 'block';
  })
})