const regFetch = document.querySelector('.js-formReg');
const logFetch = document.querySelector('.js-formLog');
console.log('wwww');

if (regFetch) {
  regFetch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password, action, method } = e.target;
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
    const { name, password, action, method } = e.target;
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
    if (data.reg) {
      window.location.assign('/');
    }
  });
}
