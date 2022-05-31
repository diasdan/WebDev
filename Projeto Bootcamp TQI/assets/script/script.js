let count = 0;

function showContent(){
    let element = document.querySelector(".hidden")
    count++;
    if(count%2==0){
        element.style.opacity = 100;   
    }
}
