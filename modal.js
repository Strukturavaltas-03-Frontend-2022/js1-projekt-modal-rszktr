/* Kiinduló forrás: 
https://codepen.io/designcouch/pen/obvKxm?editors=1111 */

let bodyElement = document.getElementsByTagName('body')[0]; 
let modalContainer = document.getElementById('modal__container');
let modalBackground = document.getElementsByClassName('modal__background')[0];

// Modal megnyitása 
const openModal = () => {
  modalContainer.removeAttribute('class');
  modalContainer.classList.add('animation');
  bodyElement.classList.add('modal-active');
}

// Megnyitás gombhoz rendelése
let openButton = document.getElementsByClassName('button--open')[0];
openButton.onclick = openModal;

// Modal zárása
const closeModal = () => {
  modalContainer.classList.add('out');
  bodyElement.removeAttribute('class');
}

// Modal bezárása X-re kattintással
let closeElement = document.getElementsByClassName('close')[0];
closeElement.onclick = closeModal;

// Modal bezárása Cancel-re kattintással
let closeWithCancel = document.getElementsByClassName('btn--cancel')[0];
closeWithCancel.onclick = closeModal;

// Modal bezárása kívülre kattintással 
modalBackground.onclick = (event) => {
  if (event.target == modalBackground) closeModal();
};

// Akció beleegyezés esetén
confirmAction = () => {window.open('/okey.html', '_self')}

// Akció Okey gombhoz rendelése
let confirmButton = document.getElementsByClassName('btn--confirm')[0];
confirmButton.addEventListener('click', confirmAction);


/* Focus trap
Kiinduló forrás: 
https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700 */

const focusableElements =
'button, [tabindex]';

nodeListFocusable = modal.querySelectorAll(focusableElements);

const exitElement = nodeListFocusable[0];
const okeyElement = nodeListFocusable[1];
const cancelElement = nodeListFocusable[2];

document.addEventListener('keydown', function (e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
  
  if (!isTabPressed) {
    return;
  }
  
  if (e.shiftKey) {
    if (document.activeElement === bodyElement) {
      exitElement.focus();
      e.preventDefault();
    } else
    if (document.activeElement === exitElement) {
      cancelElement.focus();
      e.preventDefault();
    } else
    if (document.activeElement === okeyElement) {
      exitElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === cancelElement) {
      exitElement.focus();
      e.preventDefault();
    }
  }
});