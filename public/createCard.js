const created = document.querySelector('#formCreateCard');
if (created) {
  created.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, price, quality, img, action } = e.target;
    const res = await fetch(action, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        price: price.value,
        quality: quality.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    if (data.createcard) {
      window.location.assign('/cards');
    }
  });
}
