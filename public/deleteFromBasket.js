const container = document.querySelector('.basketContainer');
container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('basketDelete')) {
    const { id } = event.target.parentElement;
    const res = await fetch(`/basket/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data > 0) {
      event.target.closest('.catalog__card').remove();
    }
  }
});
