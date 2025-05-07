document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
  
    // Add hover effect to header
    const header = document.querySelector("header h1");
    document.body.addEventListener("mouseover", (event) => {
      if (event.target === header) {
        header.style.color = "none";
        header.style.border = "8px solid Darkgreen";
        header.style.borderRadius = "5px";
        header.style.backgroundColor = "gold";
        header.style.padding = "10px";
        header.style.transition = "all 0.3s ease";
      }
    });
  
    document.body.addEventListener("mouseout", (event) => {
      if (event.target === header) {
        header.style.color = "none";
        header.style.backgroundColor = "";
        header.style.border = "none";
        header.style.borderRadius = "0";
        header.style.padding = "0";
        header.style.padding = "5";
      }
    });
  
    // Interactive carousel scrolling
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("wheel", (event) => {
      event.preventDefault();
      carousel.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "smooth",
      });
    });
  });