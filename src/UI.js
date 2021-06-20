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
