
/*
 For fade in delay
 $(document).ready( function() {
    $('#load').delay(6000).fadeOut();
});
*/

/* End of navbar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function Scrolldown() {
     window.scroll(0,100);
}

window.onload = Scrolldown;
