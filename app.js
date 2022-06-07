
// * =====================SELECTOR=======================*
let body=document.querySelector("body");    

let inputValue = document.getElementById("number");

let spanStart=document.getElementsByTagName("span")[0].textContent;

let spanFinish=document.getElementsByTagName("span")[1].textContent;

const checkButton=document.querySelector(".submit");

const newGame=document.querySelector(".new_game");

let attemptLeft=+(document.querySelector(".attempt_left span").textContent);

const message=document.querySelector(".message");

let image=document.getElementById("image");




console.log(Number(spanFinish));
//* ======================RANDOM NUMBER=======================*
const randomNumber = Math.floor(Math.random()*100+1);

console.log(randomNumber);
console.log(typeof attemptLeft);



checkButton.addEventListener("click",()=>{

  

    

    if(attemptLeft>1){
        

        let guess=Number(inputValue.value);

        

        

            if(guess < 0 || guess > 100){
               

                
                attemptLeft --;
                console.log(attemptLeft)
                document.querySelector(".attempt_left").innerHTML=`Total attempt is ${attemptLeft}`;
            }
            else if(guess==randomNumber){
               
                message.innerHTML="You win";
                body.style.backgroundColor="#52BE80";
                document.querySelector(".attempt_left").style.display="none"
                image.src="https://w7.pngwing.com/pngs/405/976/png-transparent-comic-characters-hello-man-smile-thumbnail.png";
                image.style.width="300px"

            }
            else if(guess>randomNumber){
               
                attemptLeft--;
                document.querySelector(".attempt_left").innerHTML=`Total attempt is ${attemptLeft}`;
                
                document.getElementsByTagName("span")[1].innerHTML = `${guess}`;
                console.log("jkfghkdfgfdjgdf");
              
                
            
            }
            else if(guess<randomNumber){
               
                attemptLeft--;
                document.querySelector(".attempt_left").innerHTML=`Total attempt is ${attemptLeft}`;
                document.getElementsByTagName("span")[0].innerHTML = `${guess}`;
                console.log("aaaaaaa");
              
            
            }

        }
   



    else{
        attemptLeft--;
        message.innerHTML= "Game Over! Dont give up.";
        checkButton.disabled=true;
        inputValue.disabled=true;
       

       
        //GAMEOVER
    }

    








})

newGame.addEventListener("click", () => {
    window.location.reload(false);
    inputValue.focus();

});


inputValue.addEventListener("keydown",(event)=>{
    if(event.keycode==13){
      checkButton.onclick();
    }
  
  });











/*
window.onload = () =>{
    const guessNumber = document.querySelector("span");
    const inputArea = document.getElementsByClassName("input")[0];
    const checkButton = document.querySelector(".submit");
    const attempNumber = document.querySelector(".attempt");
    const resultGame = document.querySelector(".result");
    const newGame = document.querySelector(".new-game");
    const container = document.querySelector(".container");

    let minNum = 1;
    let maxNum = 100;
    let attempt = 5;

    const randomNumber = Math.floor(Math.random()*100+1);
    console.log(randomNumber);

    
    
    checkButton.addEventListener("click",() => {
        inputArea.focus();

         if (attempt == 0){
            resultGame.innerHTML= "Game Over! Dont give up.";
            checkButton.disabled=true;
            inputArea.disabled=true;
            attempNumber.style.display="none";

        }else if(+ inputArea.value == randomNumber){
            resultGame.innerHTML = "Congratulations"
            checkButton.disabled=true;
            inputArea.disabled=true;
           
        }else if(+ inputArea.value <= 0 || + inputArea.value > 100 || + inputArea.value == ""  ){
            setTimeout(function(){
                alert("ENTER A VALID NUMBER");
            },500);
            
        
        }else if(+ inputArea.value > randomNumber){
            attempt--;
            attempNumber.innerHTML = `Total balls : ${attempt}`;
            maxNum = + inputArea.value;
            guessNumber.innerHTML = `(${minNum} and ${maxNum})`;
            inputArea.value="";

        }else if(+inputArea.value < randomNumber ){
            attempt--;
            attempNumber.innerHTML =  `Total balls : ${attempt}`;
            minNum = + inputArea.value;
            guessNumber.innerHTML = `(${minNum} and ${maxNum})`;
            inputArea.value="";
        }
  
    });

    
   
    newGame.addEventListener("click", () => {
        window.location.reload(false);

    });
    
}
*/