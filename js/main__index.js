var popup = document.getElementById('popup');
var overlay = document.getElementById('overlay');
var popupStorage = localStorage.getItem('showPopup');

if (popupStorage == null) {
    var popupStorage = 'Yes'
}

function acceptCookies() {
    localStorage.setItem('showPopup', 'No');
    location.reload();
}

var showPopup = localStorage.getItem('showPopup');

if (showPopup != 'No') {
    popup.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.transform = 'scale(1)';
}

console.log('Show Popup = ' + popupStorage);