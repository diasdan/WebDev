/*

    DOM - Document Object Model

    O DOM HTML é um padrão de como acessar e modificar os elementos HTML
    de uma página.

    DOM vs BOM

    BOM - Browser Object Model 

                        window
    ______________________|_______________________
    |          |          |           |          |
document    history    location    screen    navigator
*/
        
    function darkMode(){
        let body = document.querySelector('body')
        let footer = document.querySelector('footer')
        let title = document.querySelector('h2')
        let button = document.querySelector('button')

        if(body.classList[0] == 'light-mode'){
            body.classList.replace('light-mode', 'dark-mode');
            footer.classList.replace('light-mode', 'dark-mode');
            title.innerText = "Dark Mode ON"
            button.innerText = "Light Mode"
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            footer.classList.replace('dark-mode', 'light-mode');
            title.innerText = "Light Mode ON"
            button.innerText = "Dark Mode"
        }    
    }
