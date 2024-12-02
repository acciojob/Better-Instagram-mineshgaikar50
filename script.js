// Select all the image divs
const images = document.querySelectorAll('.image');

// Add event listeners to each image div
images.forEach((image) => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

let draggedImage = null; // Store the reference of the dragged image

// Drag Start: Store the dragged image reference and set a small delay before hiding the element
function dragStart(e) {
  draggedImage = e.target;
  setTimeout(() => {
    e.target.style.display = 'none'; // Temporarily hide the element being dragged
  }, 0);
}

// Drag Over: Allow dropping by preventing the default behavior
function dragOver(e) {
  e.preventDefault();
}

// Drag Enter: Change the border style to show the target is ready for the drop
function dragEnter(e) {
  e.preventDefault();
  e.target.style.border = '2px dashed #ccc';
}

// Drag Leave: Reset the border when the dragged item leaves the target
function dragLeave(e) {
  e.target.style.border = '';
}

// Drop: Swap the dragged item with the target item
function drop(e) {
  e.preventDefault();
  e.target.style.border = ''; // Remove the border

  // Only proceed if the target is a valid image div (not the dragged item itself)
  if (e.target.classList.contains('image') && e.target !== draggedImage) {
    const targetIndex = Array.from(images).indexOf(e.target);
    const draggedIndex = Array.from(images).indexOf(draggedImage);

    // Swap positions of the images in the container
    const parent = document.getElementById('parent');
    if (draggedIndex < targetIndex) {
      parent.insertBefore(draggedImage, e.target.nextSibling);
    } else {
      parent.insertBefore(draggedImage, e.target);
    }
  }
}

// Drag End: Reset the display state of the dragged imag
