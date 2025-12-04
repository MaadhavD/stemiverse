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
    // Hide loader
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("loadDone");
        loader.classList.remove("loader");
    }
    
    // Show page content with smooth animation
    const pageContent = document.querySelector(".page--hidden");
    if (pageContent) {
        pageContent.classList.remove("page--hidden");
        pageContent.classList.add("page--visible");
    }
    
    // Ensure galaxy stays visible and bright
    const container = document.getElementById("container");
    if (container) {
        container.style.opacity = "1";
        container.style.visibility = "visible";
        container.style.zIndex = "0";
    }
    
    // Ensure canvas stays visible
    setTimeout(() => {
        const canvas = container?.querySelector("canvas");
        if (canvas) {
            canvas.style.opacity = "1";
            canvas.style.visibility = "visible";
            canvas.style.zIndex = "0";
        }
    }, 100);
})
