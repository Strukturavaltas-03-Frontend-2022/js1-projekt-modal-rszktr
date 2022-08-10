// Kiinduló forrás: https://codepen.io/designcouch/pen/obvKxm?editors=1111

// Modal megnyitása 
const openModal = () => {
  $('#modal-container').removeAttr('class').addClass('animation');
  $('body').addClass('modal-active');
}

// Megnyitás gombhoz rendelése
let openButton = document.getElementsByClassName("button--open")[0];
openButton.onclick = openModal;

// Modal zárása
const closeModal = () => {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
}

// Modal bezárása X-re kattintással
let closeElement = document.getElementsByClassName("close")[0];
closeElement.onclick = closeModal;

// Modal bezárása kívülre kattintással 
let modalBackground = document.getElementsByClassName("modal-background")[0];

$('.modal-background').click(function (event) {
  if (event.target == modalBackground) closeModal();
});


/* Focus trap
forrás: https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700 */

const focusableElements =
  'button, [tabindex]:not([tabindex="-1"])';

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', function (e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();