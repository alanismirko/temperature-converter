/**
 * Temperature calculator 
 * @author Alanis Mirko
 * @version 1.0.0 February 2022
 */





function fromCelsius(valueFrom, valueType){

    let unitTemperature = '';

    switch (valueType){
        case 'farenheit':
            unitTemperature = eval((valueFrom * (9/5))+32).toFixed(2);
            break;
        case 'celsius':
            unitTemperature = valueFrom;
            break;
        case 'kelvin':
            unitTemperature = eval(valueFrom + 273,15).toFixed(2);
            break;
    }
    return unitTemperature;
}

function fromFarenheit(valueFrom, valueType){

    let unitTemperature = '';


    switch (valueType){
        case 'farenheit':
            unitTemperature = valueFrom;
            break;
        case 'celsius':
            unitTemperature = eval((valueFrom -32)* (5/9)).toFixed(2);
            break;
        case 'kelvin':
            unitTemperature = eval((valueFrom + 459,67) *(5/9)).toFixed(2);
            break;
    }
    return unitTemperature;
}

function fromKelvin(valueFrom, valueType){

    let unitTemperature = '';

    switch (valueType){
        case 'farenheit':
            unitTemperature = eval((valueFrom - 273,15)*(9/5)+32).toFixed(2);
            break;
        case 'celsius':
            unitTemperature = eval((valueFrom - 273,15)).toFixed(2);
            break;
        case 'kelvin':
            unitTemperature = valueFrom;
            break;
    }
    return unitTemperature;
}

function convertValueType(){
    let convertingAmount = document.getElementById('convertingAmount').value;
    let listUnitFrom = document.getElementById('listUnitFrom').value;
    let listUnitTo = document.getElementById('listUnitTo').value;

    let resultValue = "";

    switch (listUnitFrom) {

        case 'celsius':
          resultValue = fromCelsius(convertingAmount, listUnitTo);
          unitSymbol = "&deg;C";
          break;
        case 'farenheit':
          resultValue = fromFarenheit(convertingAmount, listUnitTo);
          unitSymbol = "&deg;F";
          break;
        case 'kelvin':
          resultValue = fromKelvin(convertingAmount, listUnitTo);
          unitSymbol = "K";
          break;
      }
      document.getElementById('convertedAmount').innerHTML = `<span>${convertingAmount}</span>`
      document.getElementById('resultAmount').innerHTML = `<span>${resultValue}</span>`
      document.getElementById('convertedUnit').innerHTML = `<span>${unitSymbol} </span>`;
      document.getElementById('equalSign').innerHTML = `<span> = </span>`;
}

function addSymbolTo(){
    let listUnitTo = document.getElementById('listUnitTo').value;

    switch(listUnitTo){
        case 'celsius':
            unitSymbol = "&deg;C";
            break;
        case 'farenheit':
            unitSymbol = "&deg;F";
            break;
        case 'kelvin':
            unitSymbol = "K";
            break;
    }
    document.getElementById('resultUnit').innerHTML = `<span>${unitSymbol} </span>`;
}


document.getElementById('covertingForm').addEventListener('submit', function(e){
    e.preventDefault();
    convertValueType();
    addSymbolTo();
})





