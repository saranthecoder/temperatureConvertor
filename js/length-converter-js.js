
function ValidateLengthConverterForm() {
    _cmnRemoveAllErrorMessage();

    var fromLength = document.getElementById("fromLength").value;
    if (fromLength == "" || isNaN(fromLength) || (!isNaN(fromLength) < 0)) {
        _cmnShowErrorMessageBottomOfTheInputFiled("fromLength", "Enter valid Length.");
        return false;
    }


    return true;
}

function RestLengthConverter() {
    if (confirm("Are you sure want to reset the converter?")) {
        document.getElementById("fromLength").value = "";
        document.getElementById("fromUnit").value = "Celsius";
        document.getElementById("toUnit").value = "Fahrenheit";
        document.getElementById("outputLength").value = "";

        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function CalculateLength() {
    if (ValidateLengthConverterForm()) {
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var fromLength = document.getElementById("fromLength").value;
        var outputlength = document.getElementById("outputLength");

        var result = ConvertLength(fromLength, fromUnit, toUnit);
        outputlength.value = Number(result).toFixed(3);
        document.getElementById("lengthResult").innerHTML = fromLength + ' ' + fromUnit + ' = ' + result.toFixed(3) + ' ' + toUnit;

        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ConvertLength(fromLength, fromUnit, toUnit) {
    fromLength = Number(fromLength);
    
    if (fromUnit == "Celsius" && toUnit == "Fahrenheit") {
        return fromLength * (9 / 5) + 32;

    }
    else if(fromUnit == "Celsius" && toUnit == "Kelvin"){
        return fromLength + 273.15 ;
    }
    else if(fromUnit == "Celsius" && toUnit == "Celsius"){
        return fromLength ;
    }
    else if(fromUnit == "Fahrenheit" && toUnit == "Celsius"){
        return (fromLength - 32) * 5/9;
    }
    else if(fromUnit == "Fahrenheit" && toUnit == "Kelvin"){
        return (fromLength - 32) * 5/9 + 273.15;
    }
    else if(fromUnit == "Fahrenheit" && toUnit == "Fahrenheit"){
        return fromLength;
    }
    else if(fromUnit == "Kelvin" && toUnit == "Fahrenheit"){
        return (fromLength - 273.15) * 9/5 + 32 ;
    }
    else if(fromUnit == "Kelvin" && toUnit == "Celsius"){
        return fromLength- 273.15;
    }
    else if(fromUnit == "Kelvin" && toUnit == "Kelvin"){
        return fromLength;
    }
    else{
        return "MATH ERROR !"
    }
}