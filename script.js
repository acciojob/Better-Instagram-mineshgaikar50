
const boxes = document.querySelectorAll(".image");

let draggerItem = null;
console.log("boxes", boxes);
boxes.forEach((item) => {
  let img = item.querySelector("img");
  img.addEventListener("dragstart", (e) => {
    draggerItem = e.target;
  });
  img.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  img.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggerItem && draggerItem !== e.target) {
      console.log("Inside drop");
       let draggedSrc = draggerItem.src;
      draggerItem.src = e.target.src;
      e.target.src = draggedSrc;
    }
    draggerItem = null;
  });
});
