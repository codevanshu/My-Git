let display = document.getElementById('display');

function appendToDisplay(value){
    if (value === '%'){
        let currentValue = parseFloat(display.value)
        display.value = (currentValue/100);
    }
    else{
        display.value += value;
    }
    
}
function addDecimalPoint(){
    if(!display.value.includes('.')){
        display.value += '.';
    }
    
}
function Clear(){
    display.value = display.value.slice(0, -1); //if we remove back item we use -1 and if we remove front item we use 1
}

function clearAll() {
    display.value = '';
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}






