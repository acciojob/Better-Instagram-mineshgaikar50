// Select all draggable elements and the parent container
const images = document.querySelectorAll(".image");
const parent = document.getElementById("parent");

let draggedItem = null;

// Add event listeners for drag and drop functionality
images.forEach((image) => {
  // When dragging starts
  image.addEventListener("dragstart", (e) => {
    draggedItem = image;
  });

  // When dragging ends
  image.addEventListener("dragend", () => {
    draggedItem = null;
  });
});

// Add event listeners for the parent container
parent.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow dropping
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("image") && draggedItem !== e.target) {
    // Swap the dragged item and the target
    const draggedSibling = draggedItem.nextSibling === e.target ? draggedItem : draggedItem.nextSibling;
    parent.insertBefore(draggedItem, e.target);
    parent.insertBefore(e.target, draggedSibling);
  }
});
