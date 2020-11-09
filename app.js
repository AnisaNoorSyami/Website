document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    hamburgerMenu();
  }
}

function hamburgerMenu() {
  var menuIcon = document.getElementById("menu_icon");
  var closeIcon = document.getElementById("close_icon");
  var menu = document.getElementsByClassName("icon")[0];

  if (menu) {
    menu.addEventListener("click", function() {
      var subMenu = document.getElementsByClassName('sub-menu')[0];
      if (subMenu.style.display == 'none' || subMenu.style.display == '') {
        subMenu.style.display   = 'block';
        menuIcon.style.display  = 'none';
        closeIcon.style.display = 'block';
      } else {
        subMenu.style.display   = 'none';
        menuIcon.style.display  = 'block';
        closeIcon.style.display = 'none';
      }
    });
  }
}
