//Currency converter script

function ConvertedDolar() {
  var dolarValue = document.getElementById("value");
  var value = dolarValue.value;
  var dolarNumericValue = parseFloat(value);
  var reaisValue = dolarNumericValue * 5.06;
  var convertedDolar = document.getElementById("convertedValue");
  var convertedValue = "Your Dolar equals R$ " + reaisValue;

  convertedDolar.innerHTML = convertedValue;
}

function ConvertedEuro() {
  var euroValue = document.getElementById("value");
  var value = euroValue.value;
  var euroNumericValue = parseFloat(value);
  var reaisValue = euroNumericValue * 5.52;
  var convertedEuro = document.getElementById("convertedValue");
  var convertedValue = "Your Euro equals R$ " + reaisValue;

  convertedEuro.innerHTML = convertedValue;
}

function ConvertedBitCoin() {
  var bitCoinValue = document.getElementById("value");
  var value = bitCoinValue.value;
  var bitCoinNumericValue = parseFloat(value);
  var reaisValue = bitCoinNumericValue * 195.688;
  var convertedBitCoin = document.getElementById("convertedValue");
  var convertedValue = "Your Bitcoin equals R$ " + reaisValue;

  convertedBitCoin.innerHTML = convertedValue;
}

//Distance converter script

function converter() {
  var elementValue = document.getElementById("distanceValue");
  var distanceValue = elementValue.distanceValue;
  var kmValue = parseFloat(distanceValue);
  var lightYearsValue = kmValue * 9460800000000;
  var convertedValueElement = document.getElementById("convertedValue");
  var convertedValue = "The light year distance is " + lightYearsValue;
  convertedValueElement.innerHTML = convertedValue;
}
//TAREFAS EXTRAS
//programar conversor temp.
//programar conversor Km p/ anos Luz (qntos anos Luz se leva p ir a outra estrela)
