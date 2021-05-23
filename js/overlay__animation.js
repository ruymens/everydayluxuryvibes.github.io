var menu = document.getElementById('menu');
var fb = document.getElementById('fb-icon-mainpage');
var ig = document.getElementById('ig-icon-mainpage');
var tw = document.getElementById('tw-icon-mainpage');
var share = document.getElementById('share-icon-mainpage');
var help = document.getElementById('help-icon-mainpage');
var sideBar = document.getElementById('sideBarJs');
var overlayContent = document.getElementById('sideBarJs__contents');
var logo = document.getElementById('logo__hp');

var overlayAnimationRun = 'no';

function runOverlayAnimation() {
    menu.style.animation = 'overlay__styles-menu 2s';
    fb.style.animation = 'overlay__styles-social 2s';
    ig.style.animation = 'overlay__styles-social 2s';
    tw.style.animation = 'overlay__styles-social 2s';
    share.style.animation = 'overlay__styles-social 2s';
    help.style.animation = 'overlay__styles-social 2s';

    menu.style.transform = 'scale(0)';
    fb.style.transform = 'scale(0)';
    ig.style.transform = 'scale(0)';
    tw.style.transform = 'scale(0)';
    share.style.transform = 'scale(0)';
    help.style.transform = 'scale(0)';

    setTimeout(() => { sideBar.style.transform = 'translateX(-100vw)'; }, 1000);
    setTimeout(() => { 
      overlayContent.style.opacity = '1';
        


      document.body.style.scrollbarThumbColor = '#000000';
    }, 3000);
}

function closeOverlayAnimation() {
    overlayContent.style.opacity ='0';
  
    setTimeout (() => {
      sideBar.style.transform = 'translateX(100vw)'
    }, 1000)
    
    setTimeout (() => {
      menu.style.transform = 'scale(1)';
      fb.style.transform = 'scale(1)';
      ig.style.transform = 'scale(1)';
      tw.style.transform = 'scale(1)';
      share.style.transform = 'scale(1)';
      help.style.transform = 'scale(1)'; 
    }, 2000) 
}


//mobile

function runOverlayAnimationMobile() {
    sideBar.style.transform = 'translateX(-100vw)';
    setTimeout(() => { 
        close.style.opacity = '1';
        
    }, 1000);
}