'use strict';

// Получение элементов
const menuToggle = document.querySelector('#menu-toggle'),

  // Отмена стандартного поведения ссылки (обновление страницы)
  menu = document.querySelector('.sidebar');

// Появление/исчезновение меню по нажатию кнопки
menuToggle.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('visible');
});