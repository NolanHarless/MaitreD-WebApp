function calculate(){
    let rateInput = parseFloat(document.getElementById("rate").value);
    let totalInput = parseFloat(document.getElementById("total").value);
    
    if (totalInput == ""){
        alert("ERROR! Need More Info.");
    }
    if (rateInput == ""){
        alert("ERROR! Need More Info.")
    }
    document.getElementById("tipAmount").innerHTML = "$" + total*rate;
    document.getElementById("taxAmount").innerHTML = "$" + total*0.055;
    document.getElementById("TotalAmount").innerHTML = "$" + (total + (total*rate) + (total*0.055));
    return false;
}
