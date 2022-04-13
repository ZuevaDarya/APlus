var menuBurger = document.getElementById('burger');
var navList = document.getElementById('navList');

menuBurger.addEventListener('click', function(){
    this.classList.toggle('active-menu');
    navList.classList.toggle('active-menu');
});