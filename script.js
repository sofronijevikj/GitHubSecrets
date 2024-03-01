function addieren () {
    let erstezahl = parseFloat(document.getElementById('firstNumber').value);
    let zweitezahl = parseFloat(document.getElementById('secondNumber').value);
    let result = erstezahl + zweitezahl;
    document.getElementById('sonuc').innerText = "Das Ergebnis: " + result;    
}

