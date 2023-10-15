const flexContainerEl = document.getElementById('flex-container');
const buttonsEl = document.querySelectorAll('button');

// Remove a classe active do HTMLColletcion (Array)
function removeClassArray(arr) {
    arr.forEach((i) => i.classList.remove('active'))
}

// Alterana entre as classes e atributos flex
function handleFlex(button) {
    let flex = button.getAttribute('data-flex');
    let content = button.getAttribute('data-target');
    let div = document.getElementById(`${content}`);

    console.log(div);
    let nextClass = div.className;

    div.classList.remove(nextClass);
    div.classList.add(flex);

    removeClassArray(buttonsEl);
    button.classList.toggle('active');
}

// Evento de clique
buttonsEl.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        handleFlex(button)
    })
});