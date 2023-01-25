document
  .querySelector("#card_list")
  .addEventListener("click", async ({ target }) => {
    if (target.classList.contains("js-delete")) {
      const res = await fetch(`/editcard/${target.dataset.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.key > 0) {
        target.closest(".catalog__card").remove();
      }
    }
  });
