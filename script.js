/**
 * Temperature calculator 
 * @author Alanis Mirko
 * @version 1.0.0 February 2022
 */





function fromCelsius(valueFrom, valueType){

    let unitTemperature = '';

    switch (valueType){
        case 'farenheit':
            unitTemperature = eval((valueFrom * (9/5))+32);
            break;
        case 'celsius':
            unitTemperature = valueFrom;
            break;
        case 'kelvin':
            unitTemperature = eval(valueFrom + 273.15);
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
            unitTemperature = eval((valueFrom -32)* (5/9));
            break;
        case 'kelvin':
            unitTemperature = eval((valueFrom + 459.67) *(5/9));
            break;
    }
    return unitTemperature;
}

function fromKelvin(valueFrom, valueType){

    let unitTemperature = '';

    switch (valueType){
        case 'farenheit':
            unitTemperature = eval((valueFrom - 273.15)*(9/5)+32);
            break;
        case 'celsius':
            unitTemperature = eval((valueFrom - 273.15));
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

        case "celsius":
          resultValue = fromCelsius(convertingAmount, listUnitTo);
          unitSymbol = "&deg;C";
          break;
        case "farenheit":
          resultValue = fromFarenheit(convertingAmount, listUnitTo);
          unitSymbol = "&deg;F";
          break;
        case "kelvin":
          resultValue = fromKelvin(convertingAmount, listUnitTo);
          unitSymbol = "K";
          break;
      }
      document.getElementById('convertedAmount').innerHTML = `<span>${convertingAmount}</span>`
      document.getElementById('resultAmount').innerHTML = `<span>${resultValue}</span>`
      document.getElementById('convertedUnit').innerHTML = `<span>${unitSymbol} = </span>`;

}


document.getElementById('covertingForm').addEventListener('submit', function(e){
    e.preventDefault();
    convertValueType();
})





