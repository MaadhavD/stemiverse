var document = document;
//for css
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//document.getElementById("label_fiodjsf").innerText = createAcct;


window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loadDone")
    document.querySelector(".page--hidden").classList.remove("page--hidden")
})