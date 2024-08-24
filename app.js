const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape"); //returns an array
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1; //if isOdd is true, its -1, if not its 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}