document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFeild = document.getElementById('deposit-feild');
    const newDepositAmountS = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountS);


    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotalS = depositTotalElement.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalS);


    const currentDepositTo = prevDepositTotal+newDepositAmount;
    depositTotalElement.innerText = currentDepositTo;

    //Balance
    const balanceTotalElement = document.getElementById('total-balane');
    const prevTotalBalanceS = balanceTotalElement.innerText;
    const prevBalancetTotal = parseFloat(prevTotalBalanceS);

    const currentBalanceTotal = prevBalancetTotal+newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositFeild.value = '';

})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdawFeild = document.getElementById('withdaw-feild');
    const newWithdrawAmountS = withdawFeild.value;
    const newWithdrawAm = parseFloat(newWithdrawAmountS);


    const withdrawToElement = document.getElementById('withdraw-total');
    const prevWithBalanceS = withdrawToElement.innerText;
    const prevWithtTotal = parseFloat(prevWithBalanceS);

    const currentWithT = prevWithtTotal+newWithdrawAm;
    withdrawToElement.innerText = currentWithT;

    const balanceTotalElement = document.getElementById('total-balane')
    const preBalanceTotalS = balanceTotalElement.innerText;
    const preBalanceTotal =  parseFloat(preBalanceTotalS);

    const newBalanceTotal = preBalanceTotal - newWithdrawAm;
    balanceTotalElement.innerText = newBalanceTotal;

    
    withdawFeild.value = '';
})
