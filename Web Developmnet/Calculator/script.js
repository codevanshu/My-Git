let display = document.getElementById('display');
let equationSpan = document.getElementById('equation');


function appendToDisplay(value){
    if (value === '%'){
        let currentValue = parseFloat(display.value)
        display.value = (currentValue/100);
    }
    else{
        display.value += value;
    }
    updateEquation();
    
}
function addDecimalPoint(){
    if(!display.value.includes('.')){
        display.value += '.';
    }
    
}
function Clear(){
    display.value = display.value.slice(0, -1);
    updateEquation(); 
}
function clearAll(){
    display.value = '';
    equationSpan.textContent = '';
}
function calculate(){
    try{
        let result = eval(display.value);
        equationSpan.textContent = display.value;
        display.value = result;
    }
    catch(error){
        display.value = 'Error';
        equationSpan.textContent = '';
    }
}
function updateEquation() {
    equationSpan.textContent = display.value;
}





