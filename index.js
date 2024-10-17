let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(event)=>{
        const val = event.target.textContent;
        const display = document.querySelector(".input");
        switch(val){
            case '=':string = `${eval(string)}`;
            break;
            case '⌫':string = string.slice(0,string.length-1);
            break;
            case 'AC':string ='';
            break;
            case 'x': string = string +'*';
            break;
            default :string = string + val;
            break;
        }
        display.value = string;
    })
})
