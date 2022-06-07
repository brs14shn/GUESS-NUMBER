
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

let win=document.getElementById("win");

let toggler=document.getElementById("toggler");

let loser=document.getElementById("loser");





//* ======================RANDOM NUMBER=======================*
const randomNumber = Math.floor(Math.random()*100+1);

console.log(randomNumber);
console.log(typeof attemptLeft);


//*========================CHECKBUTTON=============================*
checkButton.addEventListener("click",()=>{

    if(attemptLeft>1){
        

        let guess=Number(inputValue.value);

            if(guess < 0 || guess > 100){
                alert("Please enter valid a number")
               
                attemptLeft --;
                console.log(attemptLeft)
                document.querySelector(".attempt_left").innerHTML=`Total attempt is ${attemptLeft}`;
            }
            else if(guess==randomNumber){
               
                message.innerHTML="You win";
                body.style.backgroundColor="#52BE80";
                document.querySelector(".attempt_left").style.display="none"
                image.src="https://w7.pngwing.com/pngs/405/976/png-transparent-comic-characters-hello-man-smile-thumbnail.png";
                image.style.width="200px"
                image.style.height="200px"
                win.play(); 
                inputValue.disabled=true;

            }
            else if(guess>randomNumber){
               
                attemptLeft--;
                document.querySelector(".attempt_left").innerHTML=`You have ${attemptLeft} guess right` ;
                document.getElementsByTagName("span")[1].innerHTML = `${guess}`;
                toggler.play(); 
                
            }
            else if(guess<randomNumber){
               
                attemptLeft--;
                document.querySelector(".attempt_left").innerHTML=`You have ${attemptLeft} guess right`;
                document.getElementsByTagName("span")[0].innerHTML = `${guess}`;
                toggler.play(); 
            }

        }
   
    else{
        attemptLeft--;
        message.innerHTML= "Game Over! Dont give up.";
        checkButton.disabled=true;
        inputValue.disabled=true;
        document.querySelector(".attempt_left").style.display="none";
        loser.play();
       
  
        //GAMEOVER
    }
    inputValue.value="";

    


});


//* =========================NEW GAME==================== */
newGame.addEventListener("click", () => {
    window.location.reload(false);
    inputValue.value.focus();
  

});



//*=============================KEYDOWN=================*
inputValue.addEventListener("keydown",(event)=>{
    if(event.code=='Enter'){
      checkButton.click();
    }
  
  });









