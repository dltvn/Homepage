function saveValue(inputElement) {
    if (!inputElement) throw new Error('inputElement param is required');

    const { id, value } = inputElement;

    if (!id) throw new Error('inputElemend should have an id attribute');

    localStorage.setItem(id, value);
}

function getSavedValue(inputElement) {
if (!inputElement) throw new Error('inputElement param is required');

const { id } = inputElement;

if (!id) throw new Error('inputElemend should have an id attribute');

const value = localStorage.getItem(id);

return value;
}

const input = document.querySelector('#myInput');

input.addEventListener("keyup", function(event) {
saveValue(event.target)
});

window.addEventListener('load', function() {
const value = getSavedValue(input);
input.value = value;
})