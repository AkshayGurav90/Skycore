$(document).ready(function () {
    
});


function toggleMenu() {
    //$('.main-container').toggleClass('menu-closed');
    //console.log('toggle successful');
}

function openNav() {
    $("#mySidenav").children('a').css({ 'transition': '1.5s', 'opacity': '1' });
    $("#mySidenav").css('width', '16%');
    $("#main").css('margin-left', '20%');
    $("#openNavIcon, #closeNavIcon").toggle();
}

function closeNav() {
    $("#mySidenav").children('a').css({ 'transition' : '0.1s' , 'opacity' : '0'});
    $("#mySidenav").css('width', '0');
    $("#main").css('margin-left', '4%');
    $("#openNavIcon,#closeNavIcon").toggle();
}

function slideToggle() {
    $('.accordion-body').slideToggle();
}

function editAlert() {
    alert('Are you sure you want to edit?');
}