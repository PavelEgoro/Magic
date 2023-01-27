document.querySelector('select').addEventListener('change', async (e) => {
  console.log(e.target.value);
  const sortStatus = e.target.value;
  const res = await fetch('/sort', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({
      sort: sortStatus,
    }),
  });
  //   const htmlContainer = document.querySelector()
  const date = await res.text();

  const a = document.querySelector('.cardCont').innerHTML= date;

  console.log(a);
});
