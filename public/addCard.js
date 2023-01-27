const addForm = document.querySelector('#formAddCard');

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, price, quality, img } = e.target;

    const picFile = await e.target.img.files;
    let dataWithPic;
    if (picFile.length) {
      const newFile = new FormData();
      const array = [...picFile];
      array.forEach((el) => {
        newFile.append('homesImg', el);
      });

      const responseWithPic = await fetch('/cards/upload', {
        method: 'POST',
        body: newFile,
      });

      dataWithPic = await responseWithPic.json();
    } else {
      dataWithPic = { path: '/img/card/card1.jpg' };
    }

    const res = await fetch('/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        price: price.value,
        quality: quality.value,
        img: dataWithPic.path,
      }),
    });

    const cardHtml = await res.text();
    document
      .querySelector('#card_list')
      .insertAdjacentHTML('afterbegin', cardHtml);
    e.target.reset();
  });
}
