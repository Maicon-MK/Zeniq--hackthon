
async function loginWithMetaMask() {

    const provider = await detectEthereumProvider();

    if (provider) {
        try {
        
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            const userAccount = accounts[0];
            document.getElementById('userWallet').textContent = `Wallet: ${userAccount}`;
            window.localStorage.setItem('userAccount', userAccount);

            
            window.location.href = "home.html";
        } catch (error) {
            
            console.error(error);
        }
    } else {
        alert("MetaMask not detected. Please install MetaMask extension.");
    }
}

// Função que lida com a desconexão
function disconnect() {
    window.localStorage.removeItem('userAccount');
    window.location.href = "index.html";
}

// Associar as funções aos elementos HTML
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    if (loginButton) {
        loginButton.addEventListener('click', loginWithMetaMask);
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', disconnect);
    }

    const userAccount = window.localStorage.getItem('userAccount');
    if (userAccount) {
        document.getElementById('userWallet').textContent = `Wallet: ${userAccount}`;
    }
});
