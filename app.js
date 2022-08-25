const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;
function onMove(e) {
  if (!isPainting) {
    ctx.moveTo(e.offsetX, e.offsetY);
  } else {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
}
function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", cancelPainting);

const init = document.getElementById("init");
init.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});

const lineWidth = document.getElementById("line-width");
lineWidth.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
  ctx.beginPath();
});

const color = document.getElementById("color");
color.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
  ctx.beginPath();
});

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
  ctx.beginPath();
}

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
