const addCard = document.querySelector('.cardContainer');

addCard.addEventListener('click', async (event) => {
  if (event.target.classList.contains('addCard')) {
    const { id } = event.target.parentElement;
    const res = await fetch(`/basket/${id}`, {
      method: 'POST',
    });
  }
});
