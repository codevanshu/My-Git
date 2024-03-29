let display = document.getElementById('display');
let equationSpan = document.getElementById('equation');
let historyList = document.getElementById('history-list');
let history = [];
let clearHistoryButton = document.getElementById('clear-history');


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
        history.push(display.value);
        display.value = result;
        history.push(result)
        updateHistoryList(); 
    }   
    catch(error){
        display.value = 'Error';
        equationSpan.textContent = '';
    }
}
function updateEquation() {
    equationSpan.textContent = display.value;
}

function updateHistoryList() {
    historyList.innerHTML = history.map(list => `<li>${list}</li>`).join('');
}

clearHistoryButton.addEventListener('click', clearHistory);

function clearHistory() {
    history = [];
    updateHistoryList();
    display.value = '';
    equationSpan.textContent = '';
}

function addToInput(expression) {
    display.value += expression;
}

historyList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        let clickedExpression = event.target.textContent;
        addToInput(clickedExpression);
    }
});

