let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  // toogle lo que hace esque si la clase ya esta presente lo aplica y si no lo quita la clase
  navBar.classList.toggle("active");
};
