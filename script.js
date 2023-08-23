document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); // Select the header element
    const randomColor = getRandomColor(); // Generate a random color
    header.style.color = randomColor; // Change the color of the header text
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Get a random letter to create a color code
      }
      return color;
    }
  });
  