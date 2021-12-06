/* Open the sidenav */
/*If less than 992px,open to 100%*/
function openNav(screenWidth) {
  if (screenWidth.matches) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "25%"
  }
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var screenWidth = window.matchMedia("(max-width: 992px)")
