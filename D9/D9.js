const div = document.getElementById('D9');
div.textContent = 'This is the new text content!';

const divs = document.querySelectorAll('.D9');
divs.forEach(div => {
    div.style.backgroundColor = 'skyblue';
});

const newDiv = document.createElement('div');
newDiv.textContent='Welcome to the DOM Manupuation Course!';
document.body.appendChild(newDiv);

const ulSelect = document.querySelector('ul')
const liList=document.createElement('li');
liList.textContent='home page'
ulSelect.appendChild(liList);

const removeHTMLtag= document.querySelector('span');
if (removeHTMLtag){
    removeHTMLtag.remove();
}

const bodyElement = document.querySelector('.parent');
if (bodyElement && bodyElement.lastElementChild) {
    bodyElement.removeChild(bodyElement.lastElementChild);
}

const button = document.createElement('button');
button.textContent='click to change';
document.body.appendChild(button);
button.style.backgroundColor= 'skyblue'
button.style.borderColor= 'skyblue'

const paragraph= document.createElement('p')
paragraph.textContent='the initial course'
document.body.appendChild(paragraph)

const textOptions = [
    'The text has been changed!',
    'Here is the new text!',
    'Text updated again!',
    'Another change in text!',
    'Yet another text change!'
];
let textIndex = 0;

// Add click event to button
button.addEventListener('click', () => {
    textIndex = (textIndex + 1) % textOptions.length;
    paragraph.textContent = textOptions[textIndex];
});
