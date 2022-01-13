//Слайдер с отзывами
$('.main-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

//Зафиксированное меню
$(function() {
  if ( $(window).width() >= 767 ) {
    let headerFixed = $('.headers__fix');

    $(window).scroll(function() {
      if($(this).scrollTop() > 205) {
        headerFixed.addClass('active');
      } else {
        headerFixed.removeClass('active');
      }
    });
  }
});

// Модальное окно с формой
const modalButtons = document.querySelectorAll('.trigger');
const modal = document.querySelector('.modal__item');
const overlay = document.querySelector('.modal-popup__overlay');
const closeButton = document.querySelector('.main-form__close');

modalButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow='hidden';
  });
});

closeButton.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow='';
});

document.body.addEventListener('keyup',function (e) {
    var key = e.keyCode;
    if (key == 27) {
      modal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow='';
    }
  },false
);

overlay.addEventListener('click', function () {
  modal.classList.remove('active');
  this.classList.remove('active');
  document.body.style.overflow='';
});

//Выпадашка с телефоном в фикс шапке
const btnPhone = document.querySelector('.headers__fix-btn');
const innerPhone = document.querySelector('.headers__fix-inner');
btnPhone.addEventListener('click', function() {
  innerPhone.classList.toggle('headers__fix-inner--full');
  btnPhone.classList.toggle('headers__fix-btn--active');
});

//Главное меню
const toggleMenu = document.querySelector('.header__toggle-menu');
const mainNav = document.querySelector('.headers__nav');

toggleMenu.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

const subMenu = document.querySelector('.submenu-toggle');

subMenu.addEventListener('click', function() {
  subMenu.previousElementSibling.classList.toggle('active');
});

var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });
