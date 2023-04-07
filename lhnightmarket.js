//分享 start//
let share = document.querySelector('.share');
let sharebtn = document.querySelector('header .navbar .shareicon');

sharebtn.onclick = () =>{
    share.classList.toggle('active');
}

document.querySelector('#close-share').onclick = () =>{
    share.classList.remove('active');
}
//分享 end//

//navbar start//
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = ()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
//navbar end//
