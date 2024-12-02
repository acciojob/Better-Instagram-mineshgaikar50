const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedItemId);
    const droppedItemId = event.target.id;
    const droppedItem = document.getElementById(droppedItemId);

    // Swap the background images of the two items
    const tempBackgroundImage = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = droppedItem.style.backgroundImage;
    droppedItem.style.backgroundImage = tempBackgroundImage;
}