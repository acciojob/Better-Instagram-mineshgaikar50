// Get all the image divs
const images = document.querySelectorAll('.image');

// Add event listeners for drag events
images.forEach((image) => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('dragenter', dragEnter);
    image.addEventListener('dragleave', dragLeave);
    image.addEventListener('drop', drop);
    image.addEventListener('dragend', dragEnd);
});

let draggedItem = null; // Store the dragged item

// Function to handle when dragging starts
function dragStart(e) {
    draggedItem = e.target; // Store reference to dragged item
    setTimeout(() => {
        e.target.style.opacity = '0.5'; // Make dragged item semi-transparent
    }, 0);
}

// Allow dropping on the target by preventing the default behavior
function dragOver(e) {
    e.preventDefault(); // This is necessary to allow dropping
}

// Add visual feedback when the dragged item enters a target
function dragEnter(e) {
    e.preventDefault();
    if (e.target !== draggedItem) {
        e.target.classList.add('selected'); // Highlight the target
    }
}

// Remove the visual feedback when the dragged item leaves a target
function dragLeave(e) {
    e.target.classList.remove('selected'); // Remove highlight
}

// Handle the drop event and swap the images
function drop(e) {
    e.preventDefault();
    e.target.classList.remove('selected'); // Remove highlight
    if (e.target !== draggedItem && e.target.classList.contains('image')) {
        // Swap the background color or content between the dragged and target items
        const draggedContent = draggedItem.textContent;
        draggedItem.textContent = e.target.textContent;
        e.target.textContent = draggedContent;
    }
}

// Reset the style of the dragged item after the drag ends
function dragEnd(e) {
    e.target.style.opacity = '1'; // Reset opacity
    draggedItem = null; // Clear the reference
}
