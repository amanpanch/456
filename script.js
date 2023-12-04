const divContainer = document.querySelector('#elementToWorkOn');    
let isclicked = true;
let showOrHide = function(){
    if(isclicked){
        divContainer.style.display = 'block';
        isclicked = false;
    }else{
        divContainer.style.display = 'none';
        isclicked = true;
    }
}

const divContainer1 = document.querySelector('#elementToWorkOn1');    
let isclicked1 = true;
let showOrHide1 = function(){
    if(isclicked1){
        divContainer.style.display = 'block';
        isclicked1 = false;
    }else{
        divContainer.style.display = 'none';
        isclicked1 = true;
    }
}

const divContainer2 = document.querySelector('#elementToWorkOn2');    
let isclicked2 = true;
let showOrHide2 = function(){
    if(isclicked2){
        divContainer.style.display = 'block';
        isclicked2 = false;
    }else{
        divContainer.style.display = 'none';
        isclicked2 = true;
    }
}


function totalclick(click){
    const totalclicks = document.getElementById('totalclicks');
    const sumvalue = parseInt(totalclicks.innerText);
    console.log(sumvalue + click);
    totalclicks.innerText = sumvalue;

    if(sumvalue < 0){
        totalclicks.innerText = 0;
    }

    if(click === 0) {
        totalclicks.innerText = 0;
    }
}
