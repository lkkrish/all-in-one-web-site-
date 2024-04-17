inputstatment = document.querySelectorAll("#butt");
symbolstatemet = document.querySelectorAll("#but")
winner = document.querySelector("#no");
extra_button = document.querySelector("#e");
pre_num = document.querySelector("#pre");
equal_to_button = document.querySelector("#equ")
AC_C = document.querySelectorAll("#ut")
let counter = 0;
let display  = 0;
let power = 0;





winner.addEventListener("click",function(){
    winner.innerText = "Hi";

});
inputstatment.forEach(element => {
    element.addEventListener("click",function(){
        if(counter === 0){
            winner.innerText = element.innerText;
            counter = counter + 1;
            display = winner.innerText;
            display = parseInt(display)
        }else{
            display = (display*10)+parseInt(element.innerText)
            winner.innerText= display
           
        };
    });});

symbolstatemet.forEach(button => {
    button.addEventListener("click",function(){
        display_1 = display
        num = display_1
        winner.innerText = button.innerText
        display = ""
        equal();
        pre_num.innerText=num
        action_button = button.innerText

    });
    
});



AC_C = (value_each =>{
    value_each.addEventListener("click",function(){
        window.location.reload()
    })
});



equal = () =>{ 
    equal_to_button.addEventListener("click",function(){
       
        if(action_button === "+"){
            winner.innerText = display + display_1
            
        }else if (action_button === "-"){
            winner.innerText = display_1 - display

        }else if (action_button === "/"){
            winner.innerText = display_1 / display

        }else if (action_button === "%"){
            winner.innerText = (display_1 / 100)*display

        }else if (action_button === "x^2"){
            winner.innerText = display_1 * display_1

        }else if (action_button === "x^x"){
            winner.innerText = display_1 ** display
        }else if (action_button === "√"){
            winner.innerText =  Math.sqrt(display_1);
        };
    });

};
