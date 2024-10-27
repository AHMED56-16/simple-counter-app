let count=0;
function increament(){
    count++;
    document.querySelector('h2').innerHTML=count;
}
function decrement(){
    if(count>0){
        count--;
        document.querySelector('h2').innerHTML=count;
    }
}
function reset(){
    if(count>0){
        count=0;
        document.querySelector('h2').innerHTML=count;
    }
}