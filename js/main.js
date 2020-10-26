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
const Search = document.querySelector('.search');
const Delivery = document.querySelector('.delivery');
const Bag = document.querySelector('.bag');
const Right1 = document.querySelector('#right_btn1');
const Right2 = document.querySelector('#right_btn2');
const Right3 = document.querySelector('#right_btn3');

function show_delivery(){
    Delivery.classList.add('show_side');

    Right1.addEventListener('click', function(){
        Delivery.classList.remove('show_side');
    });  
}

function show_search(){
    Search.classList.add('show_side');

    Right2.addEventListener('click', function(){
        Search.classList.remove('show_side');
    });  
}

function show_bag(){
    Bag.classList.add('show_side');

    Right3.addEventListener('click', function(){
        Bag.classList.remove('show_side');
    });  
}