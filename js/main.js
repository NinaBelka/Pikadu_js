'use strict';

// Создаем переменную, в которую положим кнопку меню
const menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
const menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', event => {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
});

// получение элементов
const loginElem = document.querySelector('.login'),
  loginForm = document.querySelector('.login-form'),
  emailInput = document.querySelector('.login-email'),
  passwordInput = document.querySelector('.login-password'),
  loginSignup = document.querySelector('.login-signup'),
  userElem = document.querySelector('.user'),
  userNameElem = document.querySelector('.user-name');

// массив пользователей
const listUsers = [
  {
    id: '01',
    email: 'maks@yandex.com',
    password: '12345',
    displayName: 'MaksJS',
  },
  {
    id: '02',
    email: 'kate@yandex.com',
    password: '123456',
    displayName: 'KateLoveMaks',
  },
  {
    id: '03',
    email: 'nina@yandex.com',
    password: '1234',
    displayName: 'Nina Volchek',
  },
];

// регистрация и авторизация
const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },
  logOut() {
    console.log('выход');
  },
  signUp(email, password, handler) {
    if (!this.getUser(email)) {
      const user = { email, password, displayName: email }
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован!');
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();