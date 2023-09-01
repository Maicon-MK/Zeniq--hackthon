
async function loginWithMetaMask() {
    const provider = await detectEthereumProvider();

    if (provider) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            const userAccount = accounts[0];
            localStorage.setItem('userAccount', userAccount);

            window.location.href = "dashboard.html"; 
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("MetaMask not detected. Please install MetaMask extension.");
    }
}

const loginButton = document.getElementById('loginButton');
if (loginButton) {
    loginButton.addEventListener('click', loginWithMetaMask);
}
