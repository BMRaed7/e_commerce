// Mobile Hamburger 
const Hamburger = document.querySelector('#hamburger');
const Dropdown = document.querySelector('.navbar__dropdown');

Hamburger.addEventListener('click', function(){

    //close navbar
    if(Dropdown.classList.contains('fade_in')){
        Dropdown.classList.remove('fade_in');
        Dropdown.classList.add('fade_out');
    }

    //open navbar
    else{
        Dropdown.classList.remove('fade_out');
        Dropdown.classList.add('fade_in');
    }

});

// To Top Scroll
const To_top = document.querySelector('.to_top');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > window.innerHeight ){
        To_top.classList.add('active');
    }
    else{
        To_top.classList.remove('active');
    }
});

// Side Section
const Delivery = document.querySelector('.delivery');
const Bag = document.querySelector('.bag');
const Right1 = document.querySelector('#right_btn1');
const Right2 = document.querySelector('#right_btn2');

function show_delivery(){
    Delivery.classList.add('show_side');

    Right1.addEventListener('click', function(){
        Delivery.classList.remove('show_side');
    });  
}

function show_bag(){
    Bag.classList.add('show_side');

    Right2.addEventListener('click', function(){
        Bag.classList.remove('show_side');
    });  
}

//fixed header

const Header = document.querySelector('.header');
const Dropdown_items = document.querySelector('.dropdown__items');

window.addEventListener('scroll', function(){

    // show header 
    if(window.pageYOffset > window.innerHeight ){
        Header.classList.add('fixed');
        Header.classList.remove('hide_nav');
        Header.classList.add('show_nav');
        Dropdown_items.style.backgroundColor = "white";

    }

    // hide header
    else if((window.pageYOffset < window.innerHeight) && (window.pageYOffset > 500)){
        Header.classList.remove('show_nav');
        Header.classList.add('hide_nav');
    }
    else{
        Header.classList.remove('fixed');
        Header.classList.remove('hide_nav');
        Header.classList.remove('show_nav');
        Dropdown_items.style.backgroundColor = "transparent";
    }
});


// quantite counter

let Count = document.querySelector('.text__input');
const Plus = document.querySelector('#plus');
const Minus= document.querySelector('#minus');

Plus.addEventListener('click', function(){
    Count.value = parseInt(Count.value) + 1;
});

Minus.addEventListener('click', function(){
    Count.value = parseInt(Count.value) - 1;
});

// Single Product Page Slider 
let Single_img = document.querySelectorAll('.single_img')
let Live = document.querySelector('.live');
let Activated = document.getElementById('activated');

function select_img(e){
    
        for( var j=0; j < Single_img.length ; j++){
            if (Single_img[j].classList.contains('live')){
                Single_img[j].classList.remove('live');
            }
        }

        for( var j=0; j < Single_img.length ; j++){
            if (Single_img[j].id == e){
                Single_img[j].classList.add('live');
                Activated.src = Single_img[j].src;
            }
        }
        
}
