document.getElementById('btn-submit').addEventListener('click', function(){
    const inputFieldEmail = document.getElementById('user-email');
    const email = inputFieldEmail.value;

    const inputFieldPass = document.getElementById('user-password');
    const password = inputFieldPass.value;
    
    if(email === 'hello@info.com' && password === "jaman"){
        window.location.href = 'main-bank.html';
    }else{
        alert("Wrong Password");
    }

})

