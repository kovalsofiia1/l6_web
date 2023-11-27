
function generateGetFill() {
    const inputForm = document.createElement('div');
    const elementCount = document.getElementById('elementCount').value;

    for (let i = 1; i <= elementCount; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const div = document.createElement('div')
        div.className='inputContent'

        label.textContent = 'Element ' + i + ': ';
        label.htmlFor = 'element' + i; // Use 'htmlFor' instead of 'for'

        input.type = 'text';
        input.id = 'element' + i;
        input.name = 'element' + i;
        input.style.marginBottom = '5px';
        div.append(label, input);
        inputForm.append(div);
    }
    const button = document.createElement('button');
    button.type='button'
    button.textContent="Create masonry"
    button.onclick=generateMasonry;
    inputForm.append(button);

    const place = document.querySelector('.user-input');
    place.innerHTML = ''; // Clear previous content
    place.append(inputForm);
}

function generateMasonry() {

    const elementCount = document.getElementById('elementCount').value;

    const masonryContainer = document.getElementById('masonryContainer');
    masonryContainer.innerHTML = '';

    // Створити та додати нові елементи масонрі
    for (let i = 1; i <= elementCount; i++) {
        const content = document.querySelector('#element'+i);
        const masonryItem = document.createElement('div');

        masonryItem.className = 'masonry-item'; // Додайте клас для стилізації елементів Masonry
        if(content.value){
            masonryItem.textContent = content.value;
        }else{
            masonryItem.textContent = 'Element' + i;
        }

        masonryContainer.appendChild(masonryItem);

    }
    saveData();
}


