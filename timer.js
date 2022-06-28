let cdown = document.getElementById('c-down1');

let cdown1 = document.getElementById('c-down2');

let swapBtn = document.getElementById('b-swap');

let startBtn = document.getElementById('btn-1');

let resetBtn = document.getElementById('btn-2');

var min = 4;
var min1 = 4;
var sec = 60;
var sec1 = 60;
var timer = 0;
var btn1;
var btn2;

swapBtn.disabled = true;
startBtn.addEventListener('click', first);

function first(){
    btn1 = setInterval(start,1000);
    timer = 1;


function start()
{
    swapBtn.disabled = false;
        if(min ==0 && sec == 0)
        {
            clearInterval(btn1);
            clearInterval(btn2);
        }
        else if(sec <= 0)
        {
            min--;
            sec = 60; 
        }
        else{
            sec--;
        }
        cdown.innerHTML = '0'+ min+':'+sec; 
    }
    startBtn.disabled = true;

}
swapBtn.addEventListener('click', second);

function second(){

    if( timer == 1){
        clearInterval(btn1);
        btn2 = setInterval(swap,1000);
        timer = 0
    }
    else{
        clearInterval(btn2);
        first();
    }
}
  
function swap()
{
        if(min1 == 0 && sec1 == 0)
        {
            clearInterval(btn2);
            clearInterval(btn1);
        }
        else if(sec1 <= 0)
        {
            min1--;
            sec1 = 60;   
        }
        else{
            sec1--;
        }
        
        cdown1.innerHTML = '0'+min1 + ':' + sec1;
}

resetBtn.addEventListener('click',reset);
function reset()
{
    clearInterval(btn2);
    clearInterval(btn1);
    cdown.innerHTML = '0'+ 5+':'+'0'+ 0;
    cdown1.innerHTML = '0'+ 5+':'+'0'+ 0;
   
    startBtn.disabled = false;
}







