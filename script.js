function app() {
  //* Get container element
  const containerElement = document.querySelector(".grid-container");

  //! Generate Pixel div
  function generateGridChild() {
    //! Iterate and generate pixel doc
    for (let i = 0; i < 256; i++) {
      //! Create a DOM element
      const divElement = document.createElement("div");

      //! Add a class
      divElement.classList.add(`div-dot`);

      //! Append to DOM
      containerElement.append(divElement);
    }

    //! Use event delegation to check style to pixel dot
    containerElement.addEventListener("mouseover", (event) => {
      //! Check if dot has div dot class
      if (event.target.classList.contains("div-dot")) {
        //* Add Color
        event.target.style.backgroundColor = "black";
      }
    });
  }

  //! Generate Child
  generateGridChild();
}

app();
