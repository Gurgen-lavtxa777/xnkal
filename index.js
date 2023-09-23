let div = document.getElementById('myDiv');
let i = 0;
div.onclick = function(){
    i++
    if(i%2==1 && i%3==2){
        div.style.backgroundColor = 'red'
    }
    else if(i%2==0){
        div.style.backgroundColor = 'yellow'
    }
    else if(i%3==0){
        div.style.backgroundColor = 'green'
    }
}