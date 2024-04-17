
area = document.querySelectorAll("#area")
 boxElements = document.querySelectorAll("#box");
 winner = document.querySelector("#w");
counter = 1
new_game = document.querySelector("#n")
deafit_X = document.querySelector("#z")
deafit_Y = document.querySelector("#y")
win = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]



boxElements.forEach(element => {
  element.addEventListener("click", function() { 
    counter = counter + 1
    if (counter%2===0 && element.innerText == "") { 
        console.log("it was clicked")
        D = element.innerText = "X"
    }else if(counter%2 !== 0 &&element.innerText ==""){
        element.innerText = "O"

    };
   cheackwinner();
   deafit();
   restgame();
  });
});
cheackwinner = ()=>{
for (partten of win){
  boxElements[partten[0]],boxElements[partten[1]],boxElements[partten[2]]
   pos1 =boxElements[partten[0]].innerText,
   pos2 =boxElements[partten[1]].innerText,
   pos3 =boxElements[partten[2]].innerText
   if (pos1 !== ''&&pos2 !==''&&pos3 !== '')
   if (pos1===pos2&&pos2===pos3&&pos1===pos3){
    console.log("winneris")
    winner.innerText = pos1
    
   };
}; 
};


restgame = () =>{
  new_game.addEventListener("click",function(){
    window.location.reload()
  });
}; 
x_defit = () => {

};

deafit = () => {
  deafit_X.addEventListener("click",function(){
    winner.innerText = "O"

  });
  deafit_Y.addEventListener("click",function(){
    winner.innerText = "X"

  });

};