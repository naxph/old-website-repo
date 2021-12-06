// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

//Color Changer

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navcolor').css('background','white');
    $('.navcolor').css('box-shadow','rgba(0, 0, 0, 0.2) 0px 6px 6px 0px');
    } else {
    $('.navcolor').css('background','transparent');
    $('.navcolor').css('box-shadow','0px 0px 0px 0px');
    }
    });

    /* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

//Social link hover event triggers
$("#instagram").hover(function(){
    $('#mySidenav').css("background-color", "#ca2693");
    }, function(){
    $('#mySidenav').css("background-color", "#ffffff");
});

$("#twitter").hover(function(){
    $('#mySidenav').css("background-color", "#00aced");
    }, function(){
    $('#mySidenav').css("background-color", "#ffffff");
});

$("#dribbble").hover(function(){
    $('#mySidenav').css("background-color", "#e14680");
    }, function(){
    $('#mySidenav').css("background-color", "#ffffff");
});

$("#github").hover(function(){
    $('#mySidenav').css("background-color", "#592a79");
    }, function(){
    $('#mySidenav').css("background-color", "#ffffff");
});

$("#steam").hover(function(){
    $('#mySidenav').css("background-color", "#146197");
    }, function(){
    $('#mySidenav').css("background-color", "#ffffff");
});



