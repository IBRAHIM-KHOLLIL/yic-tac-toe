var restart = document.querySelector("#b");

var squars = document.querySelectorAll('td');

function clearBord(){
    for(var i = 0; i<squars.length; i++){
        squars[i].textContent = '';
    }
}

restart.addEventListener('click', clearBord);

function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}
for(var i = 0; i<squars.length; i++){
        squars[i].addEventListener('click', changeMarker);
    }