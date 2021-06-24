export function showMessage(msg, type, node) {
  if (!document.querySelector(".alert")) {
    const alert = document.createElement("p");
    alert.classList.add("alert", `${type}`);
    alert.textContent = `${msg}`;

    node.appendChild(alert);

    setTimeout(() => {
     node.removeChild(alert);
    }, 2500);
  }
}

export function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}


export function showImages(imagesArray, node){
 
  if(imagesArray.length > 0){
    imagesArray.forEach((image) => {
          const src = image.previewURL;
          node.innerHTML += `
          <div class = "card">
          <img src=${src} />
          <p><b>${image.likes}</b> <span>Likes</span></p>
          <a class="btn-open" href="${image.largeImageURL}" target="_blank">Abrir imagen</a>
          </div>
          `;
          
        });
      } else{
          showMessage("No se encontraron resultados para tu búsqueda. 😏", "not-found", node)
      }
}

export function createBtnPage(quantity, node, func){

  for (let index = 1; index <quantity; index++) {
  const btnPag = document.createElement("button")
  btnPag.className = "btn-pag"
  btnPag.innerHTML = index
  btnPag.onclick = func

  node.appendChild(btnPag)
  }
}