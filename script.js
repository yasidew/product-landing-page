document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header') // select header
    const changeColorButton = document.querySelector('#change-color-button') // select button

    changeColorButton.addEventListener("click", function() {
        const randomColor = getRandomColor(); // get random color from function
        header.style.color = randomColor;
    });


    function getRandomColor(){
        const letters = "0123456789ABCDEF";
        let color = "#";
        for(let i =0; i<6 ; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
});