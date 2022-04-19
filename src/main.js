const main = document.querySelector('#app');
const note = document.querySelector('.note');
const lastNote = document.querySelector('.noteHead:last-of-type')
const addNote = document.querySelector('.add-note');
const li = document.querySelector('#lineItem');
const but = document.querySelector('.add-note');



addNote.addEventListener('click', () => {
  let newNote = document.createElement('div');
  let newInputCont = document.createElement('div');
  let newTextArea = document.createElement('textarea');
  let newInput = document.createElement('input');
  
  newTextArea.className = 'note';
  newTextArea.placeholder = 'New Note...'
  newNote.className = 'noteHead';
  newInputCont.className = 'inputContain'
  newInput.className = 'headerText'
  newInput.placeholder = 'Title'

  newInputCont.appendChild(newInput);
  newNote.appendChild(newInputCont);
  newNote.appendChild(newTextArea);

  // let newNote = main.appendChild(lastNote.cloneNode(true))

  but.insertAdjacentElement('beforebegin', newNote);
});

