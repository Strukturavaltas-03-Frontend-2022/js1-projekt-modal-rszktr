// Vissza gomb
function goBack() {window.open('/index.html', '_self')}
let goBackButton = document.getElementsByClassName('button--back')[0];
goBackButton.addEventListener("click", goBack);