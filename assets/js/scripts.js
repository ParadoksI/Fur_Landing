const divider = document.getElementById("divider");
let isDragging = false;

divider.addEventListener("mousedown", function(event) {
  isDragging = true;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    const mouseX = event.clientX;
    const titleWidth = divider.parentNode.offsetWidth;
    const percentX = (mouseX / titleWidth) * 100;

    divider.style.left = `calc(${percentX}% - 2px)`; // Положение линии

    // Изменение ширины блоков с изображениями
    divider.previousElementSibling.style.width = `${percentX}%`;
    divider.nextElementSibling.style.width = `${100 - percentX}%`;
  }
});

document.addEventListener("mouseup", function(event) {
  isDragging = false;
});