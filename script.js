document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
  
    // Add hover effect to header
    const header = document.querySelector("header h1");
    document.body.addEventListener("mouseover", (event) => {
      if (event.target === header) {
        header.style.color = "#fff";
        header.style.backgroundColor = "#6b3e26";
        header.style.padding = "10px";
        header.style.transition = "all 0.3s ease";
      }
    });
  
    document.body.addEventListener("mouseout", (event) => {
      if (event.target === header) {
        header.style.color = "#6b3e26";
        header.style.backgroundColor = "transparent";
        header.style.padding = "0";
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