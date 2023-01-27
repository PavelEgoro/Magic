const created = document.querySelector('#formCreateCard');
if (created) {
  created.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { price, quality, action } = e.target;
    const res = await fetch(action, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: price.value,
        quality: quality.value,
      }),
    });
    const data = await res.json();
    if (data.createcard) {
      window.location.assign('/cards');
    }
  });
}
