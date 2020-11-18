(function() {
  const workContainer = document.querySelector(".works");

  const createWorkFactory = function() {
    let fragment = document.createDocumentFragment();
    images.forEach((image) => {
      const div = document.createElement("div");
      div.setAttribute("class", "work");
      const $el = `<a
              href='${image.url}'
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='${image.img}' alt="" />
            </a>`;
      div.innerHTML = $el;
      workContainer.append(div);
    });
  };
  createWorkFactory();
})();
