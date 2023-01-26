const regFetch = document.querySelector('.js-formReg');
const logFetch = document.querySelector('.js-formLog');
const btnExit = document.querySelector('.js-btn-exit');
const cardList = document.querySelector('#card_list');

if (regFetch) {
  regFetch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await res.json();

    if (data.message) {
      document.querySelector('#checkReg').innerHTML = data.message;
    }
    if (data.reg) {
      window.location.assign('/');
    }
  });
}

if (logFetch) {
  logFetch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });

    const data = await res.json();

    if (data.message) {
      document.querySelector('#checkLog').innerHTML = data.message;
    }
    if (data.log) {
      window.location.assign('/');
    }
  });
}

if (btnExit) {
  btnExit.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch('/auth/logout', {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.delete) {
      window.location.assign('/');
    }
  });
}

if (cardList) {
  cardList.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('js-delete')) {
      const res = await fetch(`/cards/${target.dataset.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.key > 0) {
        target.closest('.catalog__card').remove();
      }
    }
  });
}
