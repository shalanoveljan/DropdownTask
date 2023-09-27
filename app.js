let categoributton=document.querySelector('.categori');

let close=document.querySelector('.cart-header i');

const open= document.getElementById('cart-dropdown');
const basket= document.getElementById('basketBtn');


categoributton.onclick=function(){
document.querySelector('.info ul').classList.toggle('passiv');
document.querySelector('.info ul').style.transition='0.4s';

}

basket.onclick=function(){
if(open.classList.contains('active')){
    open.classList.remove('active');
}

}

close.onclick=function(){
    document.querySelector('.open').classList.add('active');
}

let menu=document.querySelector('#menu');
let bagla=document.querySelector('.top i');

menu.onclick=function(){
    // document.querySelector('.dropmenu').classList.toggle('closed');
     document.querySelector('.dropmenu').style.transition='0.6s'
    if(document.querySelector('.dropmenu').classList.contains('closed')){
        document.querySelector('.dropmenu').classList.remove('closed');
    }
   

}
bagla.onclick=function(){
    document.querySelector('.dropmenu').classList.add('closed');
}


let sondur=document.querySelector('.icon4');
sondur.onclick=function(){
    document.querySelector('.user-drop').classList.toggle('closed');
    document.querySelector('.user-drop').style.transition='0.6s';
}