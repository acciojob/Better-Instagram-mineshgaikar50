// Select all draggable elements and the parent container
const images = document.querySelectorAll(".image");
const parent = document.getElementById("parent");

let draggedItem = null;

// Add event listeners for drag and drop functionality
images.forEach((image) => {
  // When dragging starts
  image.addEventListener("dragstart", (e) => {
    draggedItem = image;
    setTimeout(() => {
      image.style.display = "none"; // Hide the dragged element temporarily
    }, 0);
  });

  // When dragging ends
  image.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedItem.style.display = "block"; // Show the dragged element again
      draggedItem = null;
    }, 0);
  });
});

// Add event listeners for the parent container
parent.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow dropping
});

parent.addEventListener("dragenter", (e) => {
  e.preventDefault(); // Highlight the drop zone
  if (e.target.classList.contains("image")) {
    e.target.classList.add("selected");
  }
});

parent.addEventListener("dragleave", (e) => {
  if (e.target.classList.contains("image")) {
    e.target.classList.remove("selected"); // Remove the highlight
  }
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("image") && draggedItem !== e.target) {
    e.target.classList.remove("selected");
    // Rearrange elements by swapping their positions
    const allItems = Array.from(parent.children);
    const droppedIndex = allItems.indexOf(e.target);
    const draggedIndex = allItems.indexOf(draggedItem);

    if (droppedIndex > draggedIndex) {
      parent.insertBefore(draggedItem, e.target.nextSibling);
    } else {
      parent.insertBefore(draggedItem, e.target);
    }
  }
});
