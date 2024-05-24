var document = document;
//for css
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loadDone")
    document.querySelector(".loader").classList.remove("loader")
    document.querySelector(".page--hidden").classList.remove("page--hidden")
})
