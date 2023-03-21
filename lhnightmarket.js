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