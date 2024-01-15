
function makeBubble()
{
    var clutter ="";
    for(var i = 1; i<=145; i++)
    {
       var randomnumber = Math.floor(Math.random()*10);
       clutter += `<div class="bubble">${randomnumber}</div>`;
    }
    
    document.querySelector("#p-bottom").innerHTML = clutter;
    
}

var hitnum;
function getnewHit(){
   hitnum= Math.floor(Math.random()*10);
   document.querySelector("#hitvar").textContent=hitnum;
}

var timer = 60;
function runtimer(){
    var timing=setInterval(function(){
        if(timer>0)
        {
        timer--;
    document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(timing);
            document.querySelector("#p-bottom").innerHTML= `<h1>Game Over</h1>`; // to clearscreen of bubbles

        }
    },1000);
}

var score=0;

function increaseScore(){
    score+=10;
    document.querySelector("#scorechanger").textContent=score;
}

// for getting information that which bubble we select have add event  to that bubble
// so there are 145 bubbles so we have to add 145 eventlister hence we add eventlistner 
// to the parent of bubble and parent of that bubble is $p-bottm hence when 
// we click on any weher in that sectoion we get info of that perticulat poin 

document.querySelector("#p-bottom").addEventListener("click" , function(bubbleinfo) {
        var clickednum = Number(bubbleinfo.target.textContent);
        if(clickednum === hitnum)
        {
            increaseScore();
            makeBubble();
            getnewHit();
        }
});
getnewHit();
runtimer();
makeBubble();