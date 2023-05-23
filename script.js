function myfunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light mode";
    }else{
        button.textContent="Dark mode";
    }
}
