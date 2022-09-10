let container = document.getElementById('container');


container.addEventListener('input', function(){

    function formatMoney(value) {
        return "$ " + value;
    };
    
    function formatSplit(value){
        if (value === "1") return value + "person";
        return value + "people "
    };

    
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let splitValue = document.getElementById('splitInput').value;
    
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue/splitValue;
    let newBillEach = (bill + tipValue) / splitValue;

    document.getElementById('tipPercent').innerHTML =  ((tipValue * 100) / bill) + "%";
    document.getElementById('tipInput').innerHTML = bill;
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(bill + tipValue);
    document.getElementById('splitValue').innerHTML = formatSplit(splitValue);
    document.getElementById('billEach').innerHTML = formatMoney(newBillEach);
    document.getElementById('tipEach').innerHTML = formatMoney(tipEach); 

    console.log({bill, tipPercent, splitValue})

});
