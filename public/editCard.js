const editt = document.querySelector('#formEditCard');
if (editt) {
  editt.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, description, action } = e.target;
    const res = await fetch(action, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.editcard) {
      window.location.assign('/cards');
    }
  });
}