 function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            else if(caseNumber > 0){
                caseNumber = parseInt(caseNumber) - 1;
            }
       
        caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = 0 + price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 750;
        const caseTotal = getInputvalue('case') * 220;
        const kurtiTotal = getInputvalue('kurti') * 589;
        const subTotal = phoneTotal + caseTotal + kurtiTotal;
        const tax = 18;
        const delivery_charges = 100;
        const totalPrice = subTotal + tax + delivery_charges;

        // update on the html
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('case-plus').addEventListener('click',function(){
   upadateCaseNumber('case', 220 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
upadateCaseNumber('case', 220, false);
});

// phone prcie update using add event linstner
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',750, true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',750 , false);
});



document.getElementById('kurti-plus').addEventListener('click',function(){
    upadateCaseNumber('kurti', 589 ,true);
 });

document.getElementById('kurti-minus').addEventListener('click',function(){
    upadateCaseNumber('kurti', 589 , false);
});







// -----------------------------------------