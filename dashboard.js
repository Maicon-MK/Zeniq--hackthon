document.addEventListener('DOMContentLoaded', function () {
    const userAccount = localStorage.getItem('userAccount');
    if (userAccount) {
        document.getElementById('userWallet').textContent = `Wallet: ${userAccount}`;
        document.body.classList.add('dashboard');
    }

    const disconnectButton = document.getElementById('disconnectButton');
    if (disconnectButton) {
        disconnectButton.addEventListener('click', function () {
            localStorage.removeItem('userAccount');
            document.body.classList.remove('dashboard'); 
            document.body.classList.add('logout'); 
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500); 
        });
    }
});
