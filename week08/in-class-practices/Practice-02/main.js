const box = document.getElementById("box");
const buttons = document.querySelectorAll("button");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const color = btn.dataset.color;
    box.style.backgroundColor = color;
    box.textContent = color.toUpperCase();
  });
});
