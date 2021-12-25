/* Script du loader */
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
	
	loader.classList.add('fondu-out');
	loader.style.display = 'none';
	
})
/* Script du slider partie 2 dans les news */
var counter = 1;
	setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4){
	counter = 1;
	}
}, 5000);

/* Script du déploiment de la barre de navigation */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

/* Script du slider partie 4 dans le lightnovel */
const items = document.querySelectorAll('.slider-lthnvl img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('true');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('true');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('true');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('true');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);